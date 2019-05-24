import React from 'react';
import axios from 'axios';
import Bitcoin from './Bitcoin';
import { messaging } from "./init-fcm";

export default class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items:[],
            coin:'bitcoin'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {
        axios.get(`https://api.coincap.io/v2/assets/`)
            .then(res =>{
                const items = res.data.data;
                this.setState({ items });
            });

        messaging.requestPermission()
            .then(async function() {
                const token = await messaging.getToken('j attend que ca marche');
                //console.log(token);
            })
            .catch(function(err) {
                console.log("Unable to get permission to notify.", err);
            });
    }


    handleClick(e) {
        this.setState({
            coin:e.target.value
        })
        //console.log(e.target.value);
    }

    render() {
       // const coin = this.state.coin;
        const filteredCoin = this.state.items.filter(coin => coin.id === this.state.coin)
        return(
            <div className="container">
                <h2 style={{ marginTop:6+'vh'}}>Choose your crypto money</h2>
                <select
                    className="custom-select"
                    onChange={this.handleClick}
                >
                    {this.state.items.map((item)=>
                        <option
                            key={item.id}
                            value={item.id}
                             >
                            {item.name}
                        </option>
                    )}
                </select>
                { filteredCoin.map((infos)=>
                    <Bitcoin key={infos.id} name={infos.name} price={infos.priceUsd} change={infos.changePercent24Hr}/>
                )}
            </div>
        )
    };
}
