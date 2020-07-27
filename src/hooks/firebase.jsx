import { useState, useEffect } from 'react'

const admin = require('firebase-admin');

var serviceAccount = require('../admin-sdk.json');

export const Firebase = () => {
    const [state, setState] = useState({ admin })

    useEffect(() => {
        // const app = admin.initializeApp({
        //     credential: admin.credential.cert(serviceAccount),
        //     databaseURL: "https://naanii.firebaseio.com"
        // });

        if (admin.app.length === 1) {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                databaseURL: "https://naanii.firebaseio.com"
            });

            // const db = admin.firestore();
            const auth = admin.auth();

            console.log('shit')
            setState({ admin, auth })
        }
    }, [])

    return state
}