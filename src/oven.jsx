import { useState, useEffect } from 'react'

export default function Oven()
{
    const fastAPIUrl = 'http://10.0.0.178:8000'
    const cameraInfoEndpoint = '/camera-info'
    const metadataEndpoint = '/metadata'

    const [camera, setCamera ] = useState([])
    const [metadata, setMetadata] = useState([])

    const getCameraInfo = async () =>
    {
        const response = await fetch (`${fastAPIUrl}${cameraInfoEndpoint}`)
        const result = await response.json()
        
        setCamera(result)
    }
    
    const getMetadata = async () =>
    {
        const response = await fetch (`${fastAPIUrl}${metadataEndpoint}`)
        const result = await response.json()

        setMetadata(result)
        console.log(result)
    }

    useEffect(() =>
    {
        getCameraInfo();
        getMetadata() 
    }, [])

    return <>
        { camera.map((value, index) =>
            <button key={index}> { value.Model } </button>) }
        
        <button>
            Click Me
        </button>    
    </>
}