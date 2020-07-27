import React from 'react';
import { ConnectDB } from '../hooks/connect-db';

export const Main = () => {
    ConnectDB()

    return (
        <div>
            hey
        </div>
    )
}