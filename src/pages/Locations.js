import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddLocationForm from '../components/AddLocationForm';
const Locations = () => {
    let [loc, setLocation] = useState([]);
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location")
        .then(res => {
        // let arr = new Array(res.data.results[0]);
        let arr1 = new Array(res.data.results);
        setLocation(arr1[0]);
        })
        .catch(err => {
        console.log("Something went wrong:",err);
        })
    }, [])

    const [tableData, setTData] = useState([])
    const [data_form, setData] = useState({
        name: '',
        date_c: '',
        dimension: '',
        type_l: '',
        url: '',
        resident: '',
    });


    const handleInputChange = (e) => {
        setData({
            ...data_form,
            [e.target.name]: e.target.value
        });
    }

    const sendData = (event) => {
        event.preventDefault();

        const newData = (data) => ([...data, data_form]);
        setTData(newData)
        const emptyData = {
            name: '',
            date_c: '',
            dimension: '',
            type_l: '',
            url: '',
            resident: '',
        };
        setData(emptyData);
    }
    return (
        <div>
            <AddLocationForm handleInputChange={handleInputChange} inputData={data_form} sendData={sendData} />
            <div className='container'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Created date</th>
                        <th>Dimension</th>
                        <th>Type</th>
                        <th>Check info</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    { loc.map((loc, index) => (
                        <tr key={loc.id}>
                            <td>{loc.name}</td>
                            <td>{loc.created}</td>
                            <td>{loc.dimension}</td>
                            <td>{loc.type}</td>
                            <td><a href={loc.url}>Go to see</a></td>
                            <td>
                                <img src={"https://rickandmortyapi.com/api/character/avatar/" + (Math.floor(Math.random() * (loc.residents.length * 1) + 1) > 0 ? Math.floor(Math.random() * (loc.residents.length * 1) + 1) : 1) + ".jpeg"} alt={"Imagen " + Math.floor(Math.random() * (loc.residents.length))} height="150" />
                            </td>
                        </tr>
                    ))}

                    {tableData.map((data, index)=>{
                        return(
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.date_c}</td>
                                <td>{data.dimension}</td>
                                <td>{data.type_l}</td>
                                <td><a href={data.url}>Go to see</a></td>
                                <td><img src={window.open(data.resident, null)} alt={'Imagen:'+ data.name+ "_"+ index} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Locations