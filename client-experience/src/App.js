

import sunnyDay from './images/sunny-day.jpeg';
import coldDay from './images/cold-day.jpeg';
import Descriptions from './components/description/Descriptions';
import { IoIosPartlySunny } from "react-icons/wi";
import { useEffect } from "react";
import { getTheFormattedWeatherData } from './weatherService';

function App() {

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getTheFormattedWeatherData("paris");
    };

    fetchWeatherData();
  }, []);


  return (
    //this div is for the bg image
    <div className="App" style={{backgroundImage: `url(${coldDay})`}}>
      <div className='overlay'>
        <div className='container'>
          <div className='section section__inputs'>
            <input type="text" name='city' placeholder='Enter City'/> 
            <button>°F</button>
          </div>

          <div className='section section__temperature'>
            <div className='icon'>
              <h3>London, GB</h3>
              <img src='' 
               alt='weather icon' 
               />
              <h3>Cloudy </h3>
            </div>
            <div className='temperature'>
              <h1>34°C</h1>
            </div>
          </div>
             {/*bottom description*/ }
             <Descriptions />
        </div>
      </div>
    </div>
  );
}

export default App;
