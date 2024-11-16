import { useEffect, useState } from 'react';
import axios from 'axios';
import './About.css';

const About = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; 

  useEffect(() => {
    
    fetch('/countryData.json')
      .then((response) => response.json())
      .then((data) => setCountries(data.countries))
      .catch((error) => console.error('Error fetching country data:', error));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchWeatherData = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  useEffect(() => {
    if (searchTerm) {
      const country = countries.find((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (country) {
        fetchWeatherData(country.capital);
      }
    }
  }, [searchTerm, countries]);

  return (
    <div>
      <div className="controls">
        <input
          type="text"
          placeholder="Search country..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>

      <div className="country-container">
        {countries
          .filter((country) =>
            country.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((country, index) => (
            <div className="country-card" key={index}>
              <h2>{country.name}</h2>
              <p><strong>Capital:</strong> {country.capital}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Travel Highlights:</strong> {country.travelHighlights.join(', ')}</p>
              <p><strong>Interesting Facts:</strong> {country.interestingFacts.join(' | ')}</p>
            </div>
          ))}
      </div>

      {weatherData && (
        <div className="weather-info">
          <h2>Weather in {weatherData.name}</h2>
          <p><strong>Temperature:</strong> {weatherData.main.temp}°C</p>
          <p><strong>Weather:</strong> {weatherData.weather[0].description}</p>
          <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default About;
