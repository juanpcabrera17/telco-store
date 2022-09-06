import React, { useState, useEffect } from 'react';
import FetchLayout from './FetchLayout';

export default function FetchContainer() {

    const [persona, setPersona] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api/?inc=gender,name,nat&nat=es')
            .then((res) => res.json())
            .then((json) => { setPersona(json.results) })
            .catch((e) => console.log(e))
            .finally(() => console.log('lo ultimo q hago'))

    }, []);

    return (
        <FetchLayout persona={persona}/>
    );
}
