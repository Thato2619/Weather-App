

import sunnyDay from './images/sunny-day.jpeg';
import coldDay from './images/cold-day.jpeg';

function App() {
  return (
    //this div is for the bg image
    <div className="App" style={{backgroundImage: `url(${coldDay})`}}>
      <div className='overlay'>
        <div className='container'>
          <div className='section section__inputs'>
            <input type="text" name='city' placeholder='Enter City'/> 
            <button>°F</button>
          </div>

          <div className='section section_temperature'>
            <div className='icon'>
              <h3>London, GB</h3>
              <img src='https://za.pinterest.com/pin/765400899150381568/' alt='weather icon ' />
              <h3>Cloudy </h3>
            </div>
            <div className='temperature'>
              <h1>34°C</h1>
            </div>
          </div>
             {/*bottom description*/ }
        </div>
      </div>
    </div>
  );
}

export default App;
