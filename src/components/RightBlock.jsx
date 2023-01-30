

import Form from "./Form"
import Clock from "./Clock"
import Progress from './Progress'





function RightBlock({handleChange, gettingWeather, weather}) {
    
    return(
        <div className="rightBlock">
            <Form
             handleChange={handleChange}
             gettingWeather={gettingWeather}
             weather={weather}

            />
            <Clock/>
            <Progress/>
        </div>
    )
}
export default RightBlock