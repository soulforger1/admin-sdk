import { useEffect, useState } from 'react';
import { Firebase } from './firebase'

export const ConnectDoc = (path) => {
    const [doc, setDoc] = useState(null)
    const { db } = Firebase();

    useEffect(() => {
        if (db) {
            db.doc(path).onSnapshot((res) => {
                setDoc(res.data())
            })
        }
    }, [db, path])


    const updateDoc = (data) => {
        db.doc(path).set(({
            ...data
        }), { merge: true })
    }

    const deleteDoc = () => {
        db.doc(path).delete();
    }
    return { doc, updateDoc, deleteDoc }
}

export const ConnectCollection = (path) => {
    const [collection, setCollection] = useState(null)
    const { db } = Firebase();

    useEffect(() => {
        if (db) {
            db.collection(path).onSnapshot((res) => {
                const array = (res.docs).map((cur) => {
                    return cur.data();
                })
                setCollection(array);
            })
        }
    }, [db, path])
    return { collection }
}