
import progress1 from '../public/progress11.png'
import progress2 from '../public/progress22.png'

function Progress(){
    return(
        <div className="progressBlock">
            <div className="block">
                <div className="progress-title">Air Quality</div>
                <img src={progress1} alt="" />

            </div>

            <div className="block">
                <div className="progress-title">UV-Index</div>
                <img src={progress2} alt="" />

            </div>

        </div>
    )
}
export default Progress