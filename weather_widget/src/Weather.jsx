import { useState } from 'react'
import Searchbox from './Searchbox'
import InfoBox from "./infoBox.jsx"
export default function Weather(){
    let [weatherInfo,setWeatherInfo] = useState({
        city:"Jodhpur",
        feelslike:-3,
        humidity:93,
        maxTemp:3.97,
        minTemp: -2.36,
        temp:-0.31,
        weather: "light snow",
    })
    let updateWeatherInfo = (newInfo)=>{
        console.log(newInfo);
        setWeatherInfo(newInfo);
    }
    return(
        <div>
               <h3>Weather app by Vinit Modi</h3>
               <Searchbox updateInfo = {weatherInfo} />
               <InfoBox info = {weatherInfo}/>
               
        </div>
     

    )
}