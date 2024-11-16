import { useEffect, useState } from "react";
import axios from "axios";
import "./CountryList.css";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const api = axios.create({
      baseURL: "https://restcountries.com/v3.1/",
    });

    const fetchCountries = async () => {
      try {
        const response = await api.get("all");
        setCountries(response.data);
        setFilteredCountries(response.data);
      } catch (error) {
        setError("Error fetching country data");
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryClick = async (countryName) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
      setSelectedCountry(response.data[0]);
    } catch (error) {
      console.error("Error fetching country details:", error);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(value)
    );
    setFilteredCountries(filtered);
  };

  const sortCountries = () => {
    const sorted = [...filteredCountries].sort((a, b) =>
      sortOrder === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common)
    );
    setFilteredCountries(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="country-lists">
      <h1>Country List</h1>
      {error && <p className="error">{error}</p>}
      <div className="controlss">
        <input
          type="text"
          placeholder="Search country..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={sortCountries}>
          Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
        </button>
      </div>

      <ul>
        {filteredCountries.map((country) => (
          <li key={country.cca3} onClick={() => handleCountryClick(country.name.common)}>
            <div className="country-containers">
              <h3>{country.name.common}</h3>
              <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Population:</strong> {country.population}</p>
              <p><strong>Popular Place:</strong> {/* Add popular place if available in API */}</p>
            </div>
          </li>
        ))}
      </ul>

      {selectedCountry && (
        <div className="country-detailss">
          <h2>{selectedCountry.name.common}</h2>
          <img src={selectedCountry.flags.png} alt={`${selectedCountry.name.common} flag`} />
          <p><strong>Capital:</strong> {selectedCountry.capital ? selectedCountry.capital[0] : "N/A"}</p>
          <p><strong>Region:</strong> {selectedCountry.region}</p>
          <p><strong>Population:</strong> {selectedCountry.population}</p>
          <p><strong>Languages:</strong> {Object.values(selectedCountry.languages || {}).join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default Country;
