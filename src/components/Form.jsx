
import location from '../public/loc.png'
import search from '../public/vector.png'


function Form({handleChange, gettingWeather, weather}){

    

    return(
        <form  onSubmit={gettingWeather}>
            <img className='loc' src={location} alt="" />
            <input type="text"
            placeholder='city'
            onChange={handleChange}
            />
            <button >
                <img src={search} alt="" />
            </button>
            
        </form>
    )
}
export default Form