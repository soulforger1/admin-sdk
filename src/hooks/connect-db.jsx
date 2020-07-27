import { useEffect } from 'react';
import { Firebase } from './firebase'

export const ConnectDB = () => {
    const all = Firebase();

    // useEffect(() => {
        console.log(all);
    // }, [Firebase])

    return 'hi'
}