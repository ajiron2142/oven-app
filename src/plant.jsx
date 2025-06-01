import { useState, useEffect } from 'react'
import PlantHealth from './PlantHealth'

export default function Plant()
{
    const fastAPIUrl = 'http://10.0.0.178:8000'
    const cameraInfoEndpoint = '/camera-info'
    const metadataEndpoint = '/metadata'
    const lowResEndpoint = '/low-res'
    const highResEndpoint = '/high-res'
    const plantObjectiveEndpoint = '/describe-plant-objective'

    const [camera, setCamera ] = useState([])
    const [metadata, setMetadata] = useState([])
    const [image, setImage] = useState(null)
    const [plant, setPlant] = useState([])
    // const [loading, setloading] = useState(true)

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

    const getPlant = async () =>
    {
        const response = await fetch (`${fastAPIUrl}${plantObjectiveEndpoint}`)
        const result = await response.json()

        console.log(result)
        setPlant(result)
    
    }

    useEffect(() => {
        const fetchData = async () => {
            await getImage();
            await getCameraInfo();
            await getMetadata();
            await getPlant();
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
        
     

        {/* <p>Health of the first plant: {plant[0].health_level}</p>     */}


        

        <button onClick={ buttonClick }> Le Butt </button>

        <button> {metadata.FrameDuration}</button>

        
        Plant length: {plant.length}
        {plant.length > 0 && PlantHealth(plant[0].health_level)}

        {/* <img src={image}  alt="Image from URL" /> */}


    </>
}