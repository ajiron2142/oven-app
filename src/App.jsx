// import { useState } from 'react'
import './App.css'
import Plant from './plant.jsx'
import PlantHealth from './PlantHealth.jsx'

export default function App ()
{
  return <>
    <h1> Plant App</h1>
    <Plant />
    <PlantHealth />
    {/* <img src="src\assets\images\loading2WebP.webp" className="fullscreen-image" /> */}
    {/* <img src="src\assets\images\happyPlantWebP.webp" className="fullscreen-image" /> */}
  </>
}