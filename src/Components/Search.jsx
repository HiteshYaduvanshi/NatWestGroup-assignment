import React, { useEffect, useState } from "react";
import WeatherImg from "../assets/waether.jpg";

function Search() {
  const [cityName, setCityName] = useState("Delhi");
  const [searchCity, setSearchCity] = useState(cityName);
  const [data, setData] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchCity}&appid=ba3a097fe8393151dd2e9d023b2a4c48`
        );
        const resJson = await response.json();
        setData(resJson);

        if (!recentSearches.includes(searchCity)) {
          const updatedSearches = [searchCity, ...recentSearches.slice(0, 4)];
          setRecentSearches(updatedSearches);
          localStorage.setItem(
            "recentSearches",
            JSON.stringify(updatedSearches)
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [searchCity]);

  const handleSearchClick = (e) => {
    e.preventDefault();
    setSearchCity(cityName);
    setCityName("");
  };

  const handleRecentSearchClick = (recentSearch) => {
    setSearchCity(recentSearch);
    setCityName(recentSearch);
  };

  useEffect(() => {
    const storedSearches = localStorage.getItem("recentSearches");
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  const toggleTemperatureUnit = () => {
    setIsCelsius((prev) => !prev);
  };

  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-full"
        style={{ backgroundImage: `url(${WeatherImg})` }}
      >
        <div className="sm:flex justify-around h-full items-center">
          <div className="basis-1/3 p-5">
            <div className="bg-white text-center min-h-96">
              <form action="" onSubmit={handleSearchClick} className="py-10">
                <input
                  type="text"
                  onChange={(e) => setCityName(e.target.value)}
                  value={cityName}
                  className="border-2 mr-5"
                />
                <button type="submit" className="bg-blue-400 text-white px-3">
                  Search
                </button>
              </form>

              {data &&
              (data.message === "city not found" ||
                data.message === "Nothing to geocode") ? (
                <p className="font-bold text-red-500">No data found, please enter valid location</p>
              ) : (
                <div>
                  <p className="py-2">
                    <span className="font-bold">Location:</span>{" "}
                    {data && data.name}
                  </p>
                  <p className="py-2">
                    <span className="font-bold">Temperature:</span>{" "}
                    {data && data.main && (<>
                        {isCelsius
                          ? `${data.main.temp} °C`
                          : `${(data.main.temp * 9) / 5 + 32} °F`}
                      </>
                    )}
                  </p>
                  <p className="py-2">
                    <span className="font-bold">Wind Speed:</span>{" "}
                    {data && data.wind && data.wind.speed}
                  </p>
                  <p className="py-2">
                    <span className="font-bold">Weather Condition:</span>{" "}
                    {data && data.weather && data.weather[0].main}
                  </p>
                </div>
              )}
              <button onClick={toggleTemperatureUnit} className="mt-3 bg-blue-400 text-white px-3">
                Show Temperature in (°{isCelsius ? 'F' : 'C'})
              </button>
            </div>
          </div>
          <div className="basis-1/3 py-5">
            <div className="bg-white text-center py-5 min-h-96">
              <h2 className="font-extrabold text-3xl">Recent Searches:</h2>
              <ul>
                {recentSearches.map((recentSearch, index) => (
                  <li
                    key={index}
                    onClick={() => handleRecentSearchClick(recentSearch)}
                    className="py-2 capitalize cursor-pointer"
                  >
                    {recentSearch}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
