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
    const [loading, setLoading] = useState(true)

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
            setLoading(false);
        }
        fetchData()
    }, [])


    
    const buttonClick = () =>
    {
        console.log(metadata.FrameDuration)
    }


    


    // Loading Screen until plant array gets data
    if (loading){
        // return <h2>Loading ... getting plant data</h2>
        return <img src="src\assets\images\loading2WebP.webp" className="fullscreen-image"></img>  
    }
    // if (plant.length === 0) {
    //         return <h2> Plant is Loading</h2>              
    // }

    
    

    return <>
        {/* Render table with plant values converted to Upercase */}
        {plant.length > 0 && (
            <div className='plant-container'>
                <table className='plant-table'>
                    <tbody>
                        <tr>
                            <th> Nickname </th>
                            <td> {plant[0].cute_plant_nickname.charAt(0).toUpperCase() + plant[0].cute_plant_nickname.slice(1)} </td>
                        </tr>
                        <tr>
                            <th> HP </th>
                            <td> {plant[0].health_points} </td>
                        </tr>
                        <tr>
                            <th> Color </th>
                            <td> {plant[0].plant_color.charAt(0).toUpperCase() + plant[0].plant_color.slice(1)} </td>
                        </tr>
                        <tr>
                            <th> Height </th>
                            <td> {plant[0].plant_height_in}" </td>
                        </tr>
                        <tr>
                            <th> Type </th>
                            <td> {plant[0].plant_type.charAt(0).toUpperCase() + plant[0].plant_type.slice(1)} </td>
                        </tr>
                    </tbody>
                </table>
                <div className='plant-illustration'>
                    <PlantHealth health={plant[0].health_level} />
                </div>
            </div>
        )}

        
        {/* <div>
            {plant.length > 0 && <> Nickname: {plant[0].cute_plant_nickname} </>}
            {plant.length > 0 && <> Color: {plant[0].plant_color} </>}

        </div> */}


        {/* <div>
            {plant.length > 0 && <> Color: {plant[0].plant_color} </>}
            {plant.length > 0 && <> Nickname: {plant[0].cute_plant_nickname} </>}
        </div>     */}

        
        {/* Renders image from plant health*/}
        {/* {plant.length > 0 && <PlantHealth health={plant[0].health_level} />}  */}
        
        {/* {plant.length === 0} */}

        {/* List values of plant object in first array */}
        {/* {plant.length > 0 && (
            <ul>
                {Object.values(plant[0]).map((value, index) => ( 
                    <li key={index}> 
                        {value} 
                    </li>
                ))}
            </ul>
        )} */}


        {/* Test items */}

        {/* {plant.length > 0 && <>{plant[0].plant_color} </>} */}

        {/* <button> {metadata.FrameDuration}</button> */}

        {/* <button onClick={ buttonClick }> Le Butt </button> */}

        {/* { camera.map((value, index) =>
                <button key={index}> { value.Model } </button>) } */}

    </>
}