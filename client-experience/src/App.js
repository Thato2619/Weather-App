import sunnyDay from "./images/sunny-day.jpeg";
import coldDay from "./images/cold-day.jpeg";
import Descriptions from "./components/description/Descriptions";
import { IoIosPartlySunny } from "react-icons/wi";
import { useEffect, useState } from "react";
import { getTheFormattedWeatherData } from "./weatherService";

function App() {
  //make input text field work
  const [city, setCity] = useState("Paris");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric")
  const [bg, setbg] = useState(sunnyDay)

  //fetch data
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getTheFormattedWeatherData(city , units);
      setWeather(data);
    };

    fetchWeatherData();
  }, [units, city]);

  //add event listner to switch from metric to imperial
  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsuis = currentUnit ==="C";
    button.innerText = isCelsuis ? "°F" : "°C";
    setUnits(isCelsuis ? "metric" : "imperial") 
  };

  //create functions that enable text box to work
  const enterKeyPressed = (e) => {
    //13 is equilvalent for the 'enter' bucket
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur()
    }
  }

  return (
    //this div is for the bg image
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section__inputs">
              <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter City" />
              <button onClick={(e) => handleUnitsClick(e)}>°F</button>
            </div>

            <div className="section section__temperature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconUrl} alt="weather icon"/>
                <h3> {weather.Descriptions} </h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} ${units === "metric" ? "C" : "F"}` }° </h1>
              </div>
            </div>
            {/*bottom description*/}
            <Descriptions weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
