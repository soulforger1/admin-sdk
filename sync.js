import 'firebase/database';
import 'firebase/storage';
import admin from 'firebase-admin';
import axios from 'axios';

var serviceAccount = require('../admin-sdk.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://naanii.firebaseio.com"
});
const db = admin.firestore();

axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
    res.data.map(async ({ name, username, email, phone, website, company }) => {
        await db.collection('users').doc(cur.id + '').set({ name, username, email, phone, website, company })
    })
})

axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
    res.data.map(async ({ title, body, id, userId }) => {
        await db.collection('users').doc(userId + '').collection('user-posts').doc(id + '').set({ title, body })
    })
})