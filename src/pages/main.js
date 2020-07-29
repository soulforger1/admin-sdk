import React, { useState } from 'react';
import { ConnectDoc, ConnectCollection } from '../hooks/connect-db';

export const Main = () => {
    const [userId, setUserId] = useState(1)
    const { doc } = ConnectDoc(`users/${userId}`)
    const { collection } = ConnectCollection(`users/${userId}/user-posts`)

    const popDown = () => {
        document.getElementById('dropDown').style.display = 'none';
        document.body.removeEventListener('click', popDown);
    }
    const popUp = () => {
        document.getElementById('dropDown').style.display = 'contents';
        document.body.addEventListener('click', popDown);
    }

    const posts = () => {
        return collection.map((cur, index) => {
            return (
                <div className="br-black-2 br-ra-4 mt-5 w-100" key={index}>
                    <div className="flex items-center justify-center h-4">
                        {cur.title}
                    </div>
                    <div className="flex items-center justify-center text-center h-10">
                        {cur.body}
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="flex-col items-center">
            <div className='w-11 br-black-1 h-3 fs-20 mt-1 flex-col items-center justify-center pointer mt-5' onClick={() => popUp()}>{userId}</div>
            <div className="flex-col items-center dropdown h-33 w-10" id="dropDown">
                <div className="w-10 br-black-1 h-3 fs-20 mt-1 flex-col items-center justify-center pointer" onClick={() => setUserId(1)}>1</div>
                <div className="w-10 br-black-1 h-3 fs-20 mt-1 flex-col items-center justify-center pointer" onClick={() => setUserId(2)}>2</div>
                <div className="w-10 br-black-1 h-3 fs-20 mt-1 flex-col items-center justify-center pointer" onClick={() => setUserId(3)}>3</div>
                <div className="w-10 br-black-1 h-3 fs-20 mt-1 flex-col items-center justify-center pointer" onClick={() => setUserId(4)}>4</div>
                <div className="w-10 br-black-1 h-3 fs-20 mt-1 flex-col items-center justify-center pointer" onClick={() => setUserId(5)}>5</div>
                <div className="w-10 br-black-1 h-3 fs-20 mt-1 flex-col items-center justify-center pointer" onClick={() => setUserId(6)}>6</div>
                <div className="w-10 br-black-1 h-3 fs-20 mt-1 flex-col items-center justify-center pointer" onClick={() => setUserId(7)}>7</div>
                <div className="w-10 br-black-1 h-3 fs-20 mt-1 flex-col items-center justify-center pointer" onClick={() => setUserId(8)}>8</div>
                <div className="w-10 br-black-1 h-3 fs-20 mt-1 flex-col items-center justify-center pointer" onClick={() => setUserId(9)}>9</div>
                <div className="w-10 br-black-1 h-3 fs-20 mt-1 flex-col items-center justify-center pointer" onClick={() => setUserId(10)}>10</div>
            </div>
            {doc && <div className="mt-6"> {doc.username} </div>}
            <div>
                {collection && posts()}
            </div>
        </div>
    )
}