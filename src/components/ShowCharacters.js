import axios from 'axios';
import React, { useEffect, useState } from 'react';
const ShowCharacters = () => {
    const [characters, setCharacter] = useState([]);


    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
        .then(res => {
            console.log(res.data.results)
            setCharacter(res.data.results)
        });
    }, [])


    return (
        <div className='container card'>
            { characters.map((c, i) => {
                return (
                    <div className='card-body' key={i}>
                        <div className='card-img'>
                            <img src={c.image} alt={c.name} />
                        </div>
                        <div className='card-text'>
                            <p>Name: {c.name}</p>
                            <p>Status: {c.status}</p>
                            <p>Specie: {c.species}</p>
                            <p>Type: {c.type !== '' ? c.type : 'Not registered'}</p>
                        </div>
                    </div>
                );
            }) }
        </div>
    );
}

export default ShowCharacters;