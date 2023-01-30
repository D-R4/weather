

import { useState } from 'react';
import './App.css';
//import LeftBlock from './components/LeftBlock'
//import RightBlock from './components/RightBlock'
import WeatherIcon from './public/WeatherIcon.png'
import WeatherInfo from './components/WeatherInfo'
import WeatherCard from './components/WeatherCard'
import Form from "./components/Form"
import Clock from "./components/Clock"
import Progress from './components/Progress'

function App() {
  const [ weather, setWeather] = useState({
    list: [{
        
    }],
    city: {
        country: '',
        name: ''
    },
    change: false ,
    loading: false,
    error: false
})

    const [city, setCity] = useState('')

    const APIkey = "bd70eb2eaed51db1dae0623b05ca231e"

    const handleChange = (e) =>{
        setCity(e.target.value)
    }



    const gettingWeather = async (e) =>{
        e.preventDefault()
        
        const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`)
        
        const json = await data.json()
        console.log(json)
        setWeather({
            list: 
                json.list
            ,
            city: {
                country: json.city.country,
                name: json.city.name
            },
            change: true ,
            loading: true ,
            error: false
        })
        
    }
    
    
    
    console.log(city)
    console.log(weather)
    
    //const iconSrc = `https://openweathermap.org/img/wn/${weather.list[0].weather.icon}.png`
    //console.log(weather.list[0]?.weather?.icon)
  return (
    <div className="App">
        <div className="leftBlock">
            <div className="container">
                <div className="weatherTop">
                    <img src={!weather.change ? WeatherIcon : `https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}.png`} alt="" />
                    <div className='leftBtns'>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <WeatherInfo 
                
                weather={weather}
                />
                <WeatherCard weather={weather}/>
            </div>
        </div>
        <div className="rightBlock">
            <Form
             handleChange={handleChange}
             gettingWeather={gettingWeather}
             weather={weather}

            />
            <Clock/>
            <Progress/>
        </div>
    </div>
  );
}

export default App;
