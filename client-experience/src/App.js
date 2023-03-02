import sunnyDay from "./images/sunny-day.jpeg";
import coldDay from "./images/cold-day.jpeg";
import Descriptions from "./components/description/Descriptions";
import { IoIosPartlySunny } from "react-icons/wi";
import { useEffect, useState } from "react";
import { getTheFormattedWeatherData } from "./weatherService";

function App() {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("imperial")

  //fetch data
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getTheFormattedWeatherData("paris" , units);
      setWeather(data);
    };

    fetchWeatherData();
  }, []);

  return (
    //this div is for the bg image
    <div className="App" style={{ backgroundImage: `url(${coldDay})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section__inputs">
              <input type="text" name="city" placeholder="Enter City" />
              <button>°F</button>
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
