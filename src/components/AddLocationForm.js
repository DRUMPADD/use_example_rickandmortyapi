import React from 'react'

const AddLocationForm = ({ handleInputChange, sendData, inputData }) => {
    return (
        <form>
            <input type="text" className='input' name='name' onChange={handleInputChange} value={inputData.name}  placeholder='Name' />
            <input type="date" className='input' name='date_c' onChange={handleInputChange} value={inputData.date_c} placeholder='Date' />
            <input type="text" className='input' name='dimension' onChange={handleInputChange} value={inputData.dimension} placeholder='Dimension' />
            <input type="text" className='input' name='type_l' onChange={handleInputChange} value={inputData.type_l} placeholder='Type' />
            <input type="url" className='input'  name='url' onChange={handleInputChange} value={inputData.url} placeholder='URL' />
            <input type="file" className='input' name='resident' onChange={handleInputChange} value={inputData.resident} placeholder='File' />
            <input type="submit" className='input' value='Send data' onClick={sendData} />
        </form>
    )
}

export default AddLocationForm