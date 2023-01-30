import WeatherIcon from '../public/WeatherIcon.png'
import WeatherInfo from './WeatherInfo.jsx'
import WeatherCard from './WeatherCard'

function LeftBlock({ weather}) {

    //const iconSrc = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`

    return(
        <div className="leftBlock">
            <div className="container">
                <div className="weatherTop">
                    <img src={WeatherIcon} alt="" />
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
    )
}
export default LeftBlock