import React, { useEffect, useState } from "react";
import "./WeatherApi.css";

function WeatherApi() {
  const API_KEY = "YOUR_API_KEY_HERE";

  const [city, setCity] = useState("");
  const [wDetails, setWDetails] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const handleWeatherResponse = (finalResponse) => {
    if (Number(finalResponse.cod) !== 200) {
      setWDetails(undefined);
      setError(finalResponse.message || "Unable to fetch weather");
    } else {
      setWDetails(finalResponse);
      setError("");
    }

    setIsLoading(false);
  };

  const getData = (event) => {
    event.preventDefault();

    if (city.trim() === "") {
      setError("Please enter a city name");
      return;
    }

    setIsLoading(true);
    setError("");

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((finalResponse) => {
        handleWeatherResponse(finalResponse);
        setCity("");
      })
      .catch(() => {
        setWDetails(undefined);
        setError("Something went wrong");
        setIsLoading(false);
      });
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    setIsLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        )
          .then((response) => response.json())
          .then((finalResponse) => {
            handleWeatherResponse(finalResponse);
          })
          .catch(() => {
            setWDetails(undefined);
            setError("Unable to get weather for your location");
            setIsLoading(false);
          });
      },
      () => {
        setError("Location permission denied");
        setIsLoading(false);
      }
    );
  };

  useEffect(() => {
    if (!wDetails?.timezone && wDetails?.timezone !== 0) {
      return;
    }

    const updateTime = () => {
      const cityTime = new Date(
        Date.now() +
          new Date().getTimezoneOffset() * 60000 +
          wDetails.timezone * 1000
      );

      const formattedTime = cityTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      setCurrentTime(formattedTime);
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, [wDetails]);

  const formatTime = (unixTime) => {
    if (!wDetails) return "";

    const cityTime = new Date(
      (unixTime + wDetails.timezone) * 1000
    );

    return cityTime.toLocaleTimeString("en-US", {
      timeZone: "UTC",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getBackgroundClass = () => {
    if (!wDetails?.weather?.[0]) {
      return "default";
    }

    const weather = wDetails.weather[0].main;

    if (weather === "Clear") return "sunny";
    if (weather === "Clouds") return "cloudy";
    if (weather === "Rain" || weather === "Drizzle") {
      return "rainy";
    }
    if (weather === "Thunderstorm") return "stormy";
    if (weather === "Snow") return "snowy";

    return "default";
  };

  return (
    <div
      className={`weather-page ${getBackgroundClass()} ${
        darkMode ? "dark-mode" : ""
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

        <form className="search-box" onSubmit={getData}>
          <input
            type="text"
            value={city}
            placeholder="Enter City Name"
            onChange={(event) => setCity(event.target.value)}
          />

          <button type="submit">Search</button>
        </form>

        <button
          className="location-btn"
          onClick={getCurrentLocation}
        >
          📍 Use My Current Location
        </button>

        {isLoading && <div className="loader"></div>}

        {!isLoading && error && (
          <div className="error-message">{error}</div>
        )}

        {!isLoading && wDetails?.weather?.[0] && (
          <div className="weather-info">
            <img
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${wDetails.weather[0].icon}@2x.png`}
              alt={wDetails.weather[0].description}
            />

            <h2>
              📍 {wDetails.name}, {wDetails.sys.country}
            </h2>

            <p className="description">
              {wDetails.weather[0].description}
            </p>

            <h1 className="temperature">
              {Math.round(wDetails.main.temp)}°C
            </h1>

            <div className="details">
              <div className="box">
                <h4>🌡 Feels Like</h4>
                <p>{Math.round(wDetails.main.feels_like)}°C</p>
              </div>

              <div className="box">
                <h4>💧 Humidity</h4>
                <p>{wDetails.main.humidity}%</p>
              </div>

              <div className="box">
                <h4>🌬 Wind Speed</h4>
                <p>{wDetails.wind.speed} m/s</p>
              </div>

              <div className="box">
                <h4>🌬 Pressure</h4>
                <p>{wDetails.main.pressure} hPa</p>
              </div>

              <div className="box">
                <h4>👁 Visibility</h4>
                <p>
                  {(wDetails.visibility / 1000).toFixed(1)} km
                </p>
              </div>

              <div className="box">
                <h4>🌅 Sunrise</h4>
                <p>{formatTime(wDetails.sys.sunrise)}</p>
              </div>

              <div className="box">
                <h4>🌇 Sunset</h4>
                <p>{formatTime(wDetails.sys.sunset)}</p>
              </div>

              <div className="box">
                <h4>🕒 Local Time</h4>
                <p>{currentTime}</p>
              </div>
            </div>
          </div>
        )}

        {!isLoading && !error && !wDetails && (
          <p className="no-data">
            Search a city to check the weather
          </p>
        )}
      </div>
    </div>
  );
}

export default WeatherApi;