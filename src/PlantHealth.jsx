// import healthyPlant from './assets/images/happyPlantWebP.webp';
import healthyPlant from './assets/images/healthyPlant.jpg';
import dyingPlant from './assets/images/sadPlantWebP.webp';
// import Plant from './plant';

export default function PlantHealth( {health} )
{
    if (health === "healthy") {
        console.log("Plant is healthy")
        return (
            <img src={healthyPlant} alt="Healthy Plant" width="700" height="500"/>
        )
    } else if(health === "stressed" || health === "dying"){
        console.log("Plant is stressed or dying")
        return (
            <img src={dyingPlant} alt="Dying Plant" width="700" height="500"/>
        )
    } else {
        console.log("Failed to retreive plant health")
        // return (
        //     <h3>IDK LMAO</h3>
        // )
    }
}