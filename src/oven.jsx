import { useState, useEffect } from 'react'

export default function Oven()
{
    const fastAPIUrl = 'http://10.0.0.178:8000'
    const cameraInfoEndpoint = '/camera-info'
    
    const [oven, setOven ] = useState([])

    const getCameraInfo = async () =>
    {
        const response = await fetch (`${fastAPIUrl}${cameraInfoEndpoint}`)
        const result = await response.json()
        
        setOven(result)
        // console.log(result)
        // console.log(map.get('model'))
    }

    useEffect(() =>
    {
        getCameraInfo()    
    }, [])
    

    console.log("Hi from the console")

    return <>
        { oven.map((value, index) =>
            <button key={index}> { value.Model } </button>) }
        
        <button>
            Click Me
        </button>    
    </>
}