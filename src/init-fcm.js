import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
    // Project Settings => Add Firebase to your web app
    messagingSenderId: "729207559051"
});

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
    // Project Settings => Cloud Messaging => Web Push certificates
    "BCJ1yTgAV68QqV9PBzRQaM9JMVBcYZ-AEjLRnp_u-ZAMs7eTh9IHsPD-BO1tOuCJrQWSrGjdURJ_CQqo68a8DfU"
);

export { messaging };
