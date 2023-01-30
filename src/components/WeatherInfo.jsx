

import Characteristics from './Characteristics.jsx'

function WeatherInfo ({ weather }) {

  //const date = new Intl.DateTimeFormat("en", {day: "numeric", month: "long", year: "numeric",}).format(new Date())
  
  //const weekDay = new Intl.DateTimeFormat("en", { weekday: "long"}).format(new Date())

  //const hours = new Intl.DateTimeFormat("en", { hour: 'numeric'}).format(new Date())

  //const minutes = new Intl.DateTimeFormat("en", { minute: 'numeric'}).format(new Date())
  const data = new Date()
  //const WeatherArr = weather.list
  
  const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',]
    //{!weather ? 27 : Math.round(weather.main.temp - 273) }
    const arr = weather.list?.filter(i => {
      return new Date(i?.dt_txt).getDay() === data.getDay() 
    })
    
    console.log(arr)
    
    console.log(day[new Date(arr[0]?.dt_txt).getDay()])  //{day[new Date(arr[0]?.dt_txt).getDay()]}
    
    const date = new Date().toLocaleString('en',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    
    const hours = new Date().getHours()
    const minutes = new Date().getMinutes() //{!weather? 27 : Math.round(temp_main - 273)} //{date} //{day[new Date().getDay()]} //
    
    return(
        <div className="weatherInfo">
            <div className="temperature">
               {weather.list[0]?.main? Math.round(weather.list[0]?.main?.temp - 273) : 27 }
                <span>° C </span>
            </div>
            <div className="date">
               {date}
            </div>
            <div className="dayTime">
                <div className="day">
                {arr[0]? day[new Date(arr[0]?.dt_txt).getDay()] : 'Friday'}
    
                </div>
                <div className="time">
                    {hours} : {minutes}
                 </div>
            </div>

            <Characteristics 
            weather={weather}
            />
        </div>
    )
}

export default WeatherInfo