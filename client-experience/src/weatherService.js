//get api_key
const API_KEY = 'e1745f274f772287c0d082209965c8ef';

//make weather icon url to match with the icon ID
const makeIconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

//get weatherData that is formattted 
const getTheFormattedWeatherData = async (city, units = 'metric') => {      //units are metrics becasue its written in the documentation of the openweathermap.org website, where the api_key was found

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    //create data to fetch and run through the url and return data
    const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

    //fetch the data from the api via the console
    const {
        weather,
        main: {temp, feels_like, temp_min, temp_max, pressure,
        humidity},
        wind: { speed },
        sys: { country },
        name,
    } = data;

    //return weather data in order
    const { description, icon } = weather[0];

    return {
        description,
        iconUrl: makeIconUrl(icon), //create icon variable that collects iconID
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        name,
    };
};

export {getTheFormattedWeatherData}; 