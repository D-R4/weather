import Wind from '../public/wind.png'
import hum from '../public/hum.png'


//{weather === false ? '' : weather.wind.speed}
//{weather === false ? '' : weather.main.humidity}
function Characteristics({weather}) {
    return(
        <div className="characteristics">

                <div className="whr">
                    <img src={Wind} alt="" />
                    <div className="whrInfo">
                        <span>Wind</span> 
                        <div className="windSpeed">{!weather.change ? 3.3 : weather.list[0].wind.speed} km/h</div>
                    </div>
                </div>

                <div className="whr center">
                    <img src={hum} alt="" />
                    <div className="whrInfo">
                        <span>Hum</span> 
                        <div className="windSpeed">{!weather.change ? 2.2 : weather.list[0].main.humidity}%</div>
                    </div>
                </div>
                
        </div>
    )
}
export default Characteristics