import { useEffect, useState } from 'react';

const useService = () => {

    const [data, setData] = useState([]);
    useEffect( () => {
        fetch('https://moazzemhossainnahid.github.io/jsonapi/data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, []);

    return [data, setData];
};

export default useService;