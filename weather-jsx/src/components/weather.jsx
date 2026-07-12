import React, { useState, useEffect } from "react";
import "./Weather.css";

function Weather() {

  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [bgClass, setBgClass] = useState("sunny");
  const [currentTime, setCurrentTime] = useState("");

  
  const weatherTypes = [
    {
      main: "Clear",
      description: "Sunny",
      icon: "01d",
    },
    {
      main: "Clouds",
      description: "Cloudy",
      icon: "03d",
    },
    {
      main: "Rain",
      description: "Light Rain",
      icon: "10d",
    },
    {
      main: "Drizzle",
      description: "Drizzle",
      icon: "09d",
    }
  ];

  
  const cities = [
    "Delhi",
    "Mumbai",
    "Kolkata",
    "Chennai",
    "Bengaluru",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Bhopal",
    "Surat",
    "Patna",
    "Ranchi",
    "Chandigarh",
    "Noida",
    "Gurugram",
    "Ghaziabad",
    "Meerut",
    "Agra",
    "Varanasi",
    "Prayagraj",
    "Dehradun",
    "Haridwar",
    "Shimla",
    "Jammu",
    "Srinagar",
    "Amritsar",
    "Ludhiana",
    "Jalandhar",
    "Udaipur",
    "Jodhpur",
    "Kota",
    "Ajmer",
    "Kochi",
    "Thiruvananthapuram",
    "Kozhikode",
    "Visakhapatnam",
    "Vijayawada",
    "Mysuru",
    "Mangalore",
    "Panaji",
    "Nashik",
    "Aurangabad",
    "Raipur",
    "Bhubaneswar",
    "Siliguri",
    "Meerut"
  ];

  
  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  
  const getRandomWeather = () => {
    return weatherTypes[random(0, weatherTypes.length - 1)];
  };

 
  const fakeWeather = {};

  cities.forEach((cityName) => {

    const weather = getRandomWeather();

    fakeWeather[cityName] = {

      name: cityName,

      timezone: "Asia/Kolkata",

      sys: {
        country: "IN",
        sunrise: 1752276600,
        sunset: 1752328200,
      },

      main: {
        temp: random(22,42),
        feels_like: random(23,45),
        humidity: random(40,95),
        pressure: random(995,1020),
      },

      weather: [
        weather
      ],

      wind:{
        speed:random(2,15),
      },

      visibility: random(5,10) * 1000

    };

  });
    
  const getWeather = () => {

    setLoading(true);
    setError("");

    setTimeout(() => {

      const searchCity =
        city.charAt(0).toUpperCase() +
        city.slice(1).toLowerCase();

      const data = fakeWeather[searchCity];

      if (!data) {

        setError("City Not Found");
        setWeatherData(null);
        setLoading(false);
        return;

      }

      setWeatherData(data);

      switch (data.weather[0].main) {

        case "Clear":
          setBgClass("sunny");
          break;

        case "Clouds":
          setBgClass("cloudy");
          break;

        case "Rain":
        case "Drizzle":
          setBgClass("rain");
          break;

        default:
          setBgClass("default");

      }

      setLoading(false);

    },1000);

  };

 
  useEffect(() => {

    getWeather();

  },[]);

  
  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentTime(

        new Date().toLocaleTimeString("en-IN",{

          timeZone:"Asia/Kolkata",
          hour:"2-digit",
          minute:"2-digit",
          second:"2-digit",
          hour12:false

        })

      );

    },1000);

    return ()=>clearInterval(timer);

  },[]);

  
  const sunrise = weatherData
    ? new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN",{
        hour:"2-digit",
        minute:"2-digit",
        hour12:true
      })
    : "";

  
  const sunset = weatherData
    ? new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN",{
        hour:"2-digit",
        minute:"2-digit",
        hour12:true
      })
    : "";
      return (
    <div
      className={`weather-page ${bgClass} ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="weather-card">

        <div className="top-bar">
          <h1>🌤 Weather App</h1>

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter Indian City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getWeather();
              }
            }}
          />

          <button onClick={getWeather}>
            Search
          </button>
        </div>

        {loading && <div className="loader"></div>}

        {error && (
          <h2 className="error">
            {error}
          </h2>
        )}

        {!loading && weatherData && (
          <div className="weather-info">

            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />

            <h2>
              📍 {weatherData.name}, {weatherData.sys.country}
            </h2>

            <h3>
              {weatherData.weather[0].description}
            </h3>

            <h1>
              {weatherData.main.temp}°C
            </h1>

            <div className="details">

              <div className="box">
                <h4>🌡 Feels Like</h4>
                <p>{weatherData.main.feels_like}°C</p>
              </div>

              <div className="box">
                <h4>💧 Humidity</h4>
                <p>{weatherData.main.humidity}%</p>
              </div>

              <div className="box">
                <h4>🌬 Wind Speed</h4>
                <p>{weatherData.wind.speed} m/s</p>
              </div>

              <div className="box">
                <h4>🏔 Pressure</h4>
                <p>{weatherData.main.pressure} hPa</p>
              </div>
                            <div className="box">
                <h4>👁 Visibility</h4>
                <p>{weatherData.visibility / 1000} km</p>
              </div>

              <div className="box">
                <h4>🌅 Sunrise</h4>
                <p>{sunrise}</p>
              </div>

              <div className="box">
                <h4>🌇 Sunset</h4>
                <p>{sunset}</p>
              </div>

              <div className="box">
                <h4>🕒 Current Time</h4>
                <p>{currentTime}</p>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Weather;