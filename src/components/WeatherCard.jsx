import Union from '../public/Union.png'


function WeatherCard({weather}){

    const data = new Date()
    //фильтрация для вывода информации на 1-й карточке(завтра)
    const arr1 = weather.list?.filter(i => {
        return new Date(i?.dt_txt).getDay() === data.getDay() + 1 && new Date(i?.dt_txt).getHours() === 12
      })
    //фильтрация для вывода информации на 1-й карточке(завтра + 1)
    const arr2 = weather.list?.filter(i => {
         return new Date(i?.dt_txt).getDay() === data.getDay() + 2 && new Date(i?.dt_txt).getHours() === 12
      })
    //фильтрация для вывода информации на 1-й карточке(завтра + 2)
    const arr3 = weather.list?.filter(i => {
        return new Date(i?.dt_txt).getDay() === data.getDay() + 3 && new Date(i?.dt_txt).getHours() === 12
      })
    //фильтрация для вывода информации на 1-й карточке(завтра + 3)
    const arr4 = weather.list?.filter(i => {
        return new Date(i?.dt_txt).getDay() === data.getDay() + 4 && new Date(i?.dt_txt).getHours() === 12
      })
      console.log(arr1)

      const day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat',]

    return(
        <div className="WeatherCards">
            <div className="card">
                <div className='card-temp'>
                    {arr1[0]? Math.round(arr1[0].main?.temp - 273) : 24}° C
                </div>
                <img src={arr1[0]? `https://openweathermap.org/img/wn/${arr1[0].weather[0].icon}.png` : Union} alt="" />
                <div className="cardDay">
                    {arr1[0]? day[new Date(arr1[0]?.dt_txt).getDay()] : 'Friday'}
                </div>
            </div>
            <div className="card">
                <div className='card-temp'>{arr2[0]? Math.round(arr2[0].main?.temp - 273) : 24}° C</div>
                <img src={arr2[0]? `https://openweathermap.org/img/wn/${arr2[0].weather[0].icon}.png` : Union} alt="" />
                <div className="cardDay">
                    {arr2[0]? day[new Date(arr2[0]?.dt_txt).getDay()] : 'Friday'}
                </div>
            </div>
            <div className="card">
                <div className='card-temp'>
                    {arr3[0]? Math.round(arr3[0].main?.temp - 273) : 24}° C
                </div>
                <img src={arr3[0]? `https://openweathermap.org/img/wn/${arr3[0].weather[0].icon}.png` : Union} alt="" />
                <div className="cardDay">
                    {arr3[0]? day[new Date(arr3[0]?.dt_txt).getDay()] : 'Friday'}
                </div>
            </div>
            <div className="card">
                <div className='card-temp'>
                    {arr4[0]? Math.round(arr4[0].main?.temp - 273) : 24}° C
                </div>
                <img src={arr4[0]? `https://openweathermap.org/img/wn/${arr4[0].weather[0].icon}.png` : Union} alt="" />
                <div className="cardDay">
                     {arr4[0]? day[new Date(arr4[0]?.dt_txt).getDay()] : 'Friday'}
                </div>
            </div>
        </div>
    )
}
export default WeatherCard