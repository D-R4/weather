
import clockIcon from '../public/clockIcon.png'

function Clock(){
    return(
        <div className="clock">
            <div className="clock-side">
            <p className='clock-title'>Sunrise</p>
            <div className="clock-card">
               <div className="clock-draw">
                  <img src={clockIcon} alt="" />
               </div>
               <p className="first-time">11:24</p>
               <p className="second-time">11:45</p>
            </div>
         </div>
         <div className="clock-middle">
            <p className='clock-title'>Golden Hour</p>
            <div className="clock-card-mid">
               <div className="clock-draw">
                  <img src={clockIcon} alt="" />
               </div>
               <p className="first-time-mid">6:00 <span className='mid-span'>AM</span></p>
               <p className="second-time-mid">6:49 <span className='mid-span'>PM</span></p>
            </div>
         </div>
         <div className="clock-side">
            <p className='clock-title'>Sunset</p>
            <div className="clock-card">
               <div className="clock-draw">
                  <img src={clockIcon} alt="" />
               </div>
               <p className="first-time">7:21</p>
               <p className="second-time">7:24</p>
            </div>
         </div>
        </div>
    )
}
export default Clock