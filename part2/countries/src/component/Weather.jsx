
import { useEffect, useState } from 'react'
import axios from 'axios'
import 'dotenv'

// eslint-disable-next-line react/prop-types
export const Weather = ({capital}) => {



    const [weather, setWeather] = useState({})
    const [weatherIcon, setWeatherIcon] = useState('')
    useEffect(()=>{
      
        
    axios.get(`http://api.weatherapi.com/v1/current.json?key=f917b84cb2984181a91102526230411&q=${capital}&aqi=no`).then(result =>{
       setWeatherIcon (result.data.current.condition.icon)
      setWeather(result.data.current)
    })
    }, [])
   if (!weather) {
    console.log("idk whats happening");
    return (
        <div>nothing is here for you budd</div>
    )
   }
   else 

  {
    console.log(weather);
    
    return (
    
    <div>
        <h2>weather in {capital}</h2>
        <p>temperature is {weather.temp_c}</p>
        <img src={weatherIcon} alt="" />
        <p>wind {weather.wind_mph} m/s</p>
    </div>  
  )}
}
