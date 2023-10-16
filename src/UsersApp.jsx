import { useState } from 'react';
import { UserList } from './components/UserList';

export const UsersApp = () => {
    const [endpoint, setEndpoint] = useState('users')

    const handleFetch = (ep) => { 
        setEndpoint(endpoint == ep ? 'users' : ep);
    }

    return (
        <>
            <h1>Lista de usuarios</h1>
            <UserList endpoint={endpoint} />
            <button onClick={() => handleFetch('comments')}>Llamar API</button>
        </>
    );
};
