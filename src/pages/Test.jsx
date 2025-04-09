import React, { use, useEffect, useState } from 'react'
import axios from 'axios';

const Test = () => {
    const [location, setLocation] = useState(null)

    useEffect(() => {

    axios.get('https://api.indiastateinfo.com/')
        .then(response => 
            console.log(response.data) ||
            setLocation(response.data))
        .catch(error => console.error('Error fetching data:', error));
            
    },[])
  return (
    <div>

        <h1>Test</h1>
        <h2>Location</h2>
        <div className='flex flex-col gap-2'>
            {location && location.map((item, index) => (
                <div key={index}>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                </div>
                ))}
            </div>

    </div>
  )
}

export default Test;