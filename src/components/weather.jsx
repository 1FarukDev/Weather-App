import React, { useState } from "react";
import "./weather.css";
function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  function handleSubmit(event) {
    event.preventDefault();
  }
  const handleSearch = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a16375f27891ffa60cb1a9905328304b`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter City"
          onChange={(event) => setCity(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </form>
      <div className="temp">
      <h1>{data.name}</h1>
      <h1 className="temperature">{data.main?.temp}</h1>
      </div>
      <div className="weather">
        <h1> {data.weather && data.weather[0].description}</h1>
      </div>
      <div className="details">
        <h1 className="id">
            <div className="name">Longitude</div>
            {data.coord?.lon}
            </h1>
        <h1 className="id">
            <div className="name">Latitude</div>
            {data.coord?.lat}
            </h1>  
      </div>
    </main>
  );
}

export default Weather;
