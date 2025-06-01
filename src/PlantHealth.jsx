import React from 'react';
// import Plant from './plant';

export default function PlantHealth(health)
{
    if (health === "healthy") {
        console.log("Plant is healthy")
        return (
            <img src="src/assets/healthy_plant.jpg" alt="Healthy Plant" width="700" height="500"/>
        )
    } else if(health === "dying"){
        console.log("Plant is dying")
        return (
            <img src="src/assets/dying_plant.jpg" alt="Healthy Plant" width="700" height="500"/>
        )
    } else{
        console.log("Plant status loading")
    }
    
}