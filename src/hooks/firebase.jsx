import { useState, useEffect } from 'react'
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA1dvwbzQW6qn8S6it6BNYhKKAWsSXL964",
    authDomain: "naanii.firebaseapp.com",
    databaseURL: "https://naanii.firebaseio.com",
    projectId: "naanii",
    storageBucket: "naanii.appspot.com",
    messagingSenderId: "532739621561",
    appId: "1:532739621561:web:7ceefae92c20a7534ed168"
};

export const Firebase = () => {
    const [state, setState] = useState({ firebase })

    useEffect(() => {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
        const db = firebase.firestore();
        const auth = firebase.auth();

        setState({ firebase, auth, db })
    }, [])

    return state
}