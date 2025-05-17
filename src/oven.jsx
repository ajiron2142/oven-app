import { useState, useEffect } from 'react'

export default function Oven()
{
    const fastAPIUrl = 'http://10.0.0.178:8000'
    const cameraInfoEndpoint = '/camera-info'
    const metadataEndpoint = '/metadata'
    const lowResEndpoint = '/low-res'
    const highResEndpoint = '/high-res'

    const [camera, setCamera ] = useState([])
    const [metadata, setMetadata] = useState([])
    const [image, setImage] = useState(null)

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
        // console.log(result)
    }

    const getImage = async () =>
    {
        // Hi-res endpoint if needed
        // const response = await fetch (`${fastAPIUrl}${highResEndpoint}`)
        const response = await fetch (`${fastAPIUrl}${lowResEndpoint}`)
        const blob = await response.blob();
        const imageObjectURL = URL.createObjectURL(blob);
        setImage(imageObjectURL);
    }


    useEffect(() => {
        const fetchData = async () => {
            await getImage();
            await getCameraInfo();
            await getMetadata();
        }
        fetchData()
    }, [])

    const buttonClick = () =>
    {
        console.log(metadata.FrameDuration)
    }

    return <>
        { camera.map((value, index) =>
            <button key={index}> { value.Model } </button>) }
        
        <button>
            Click Me
        </button>  
        <button onClick={ buttonClick }> Le Butt </button>

        <button> {metadata.FrameDuration}</button>

        <img src={image}  alt="Image from URL" />


    </>
}