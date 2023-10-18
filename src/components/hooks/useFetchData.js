import { useEffect, useState } from 'react';
import { fetchdata } from '../helpers/fetchData';

export const useFetchData = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => { 
        const { data, isLoading } = await fetchdata(endpoint)
        setData(data);
        setIsLoading(isLoading);
    }


    useEffect(() => {
        getData()
    }, [endpoint]);

    return {
        data,
        isLoading,
    };
};
