import { useEffect, useState } from "react";

export const UserList = ({ endpoint }) => {
    const [data, setData] = useState([]);

    const fetchdata = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
            const res = await response.json();
            console.log(res)
            setData(res);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => { 
        fetchdata()
    }, [endpoint])

    return (
        <>
            <ul>
                {endpoint == 'users'
                    ? data.map((item) => <li key={item.id}> {item.name} </li>)
                    : data.map((item) => <li key={item.id}> {item.body} </li>)}
            </ul>
        </>
    );
};
