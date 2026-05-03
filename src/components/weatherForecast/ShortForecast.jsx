import "../weatherForecast/shortForecast.css";
import { useState, useEffect, useContext } from "react";
import refresh from "../../images/svg/refresh.svg";
import heart from "../../images/svg/heart.svg";
import SvgDelete from "../../images/svg/SvgDelete.svg";
import { cityCordinates } from "./cityCordinates";
import { WeatherDetails } from "./seeMore/WeatherDetails/WeatherDetails";
import { HourlyForecast } from "./seeMore/HourlyForecast/HourlyForecast";

export const ShortForecast = ({ searchValue }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [btnSeeMoreOpen, setBtnSeeMoreOpen] = useState(false);
  const [selectedWeather, setSelectedWeather] = useState(null);
  const [hourlyData, setHourlyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const results = await Promise.all(
        cityCordinates.map(async ({ lat, lon, city }) => {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=4123d083fddc9b79658e5081743833f9`,
          );
          const data = await res.json();
          return data;
        }),
      );

      setWeatherData(results);
    };

    fetchData();
  }, []);

  if (!weatherData.length) {
    return <div>Завантаження...</div>;
  }

  const handleDelete = (id) => {
    setWeatherData((prevState) => prevState.filter((card) => card.id !== id));
  };

  const filteredData = weatherData.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <>
      <section className="shortForecast">
        {filteredData.map((item, index) => (
          <div className="shortForecast-card" key={index}>
            <div className="shortForecast-box-country">
              <p className="shortForecast-textCity">{item.name}</p>
              <p className="shortForecast-textCountry">{item.sys.country}</p>
            </div>

            <p className="shortForecast-time">
              {new Date(item.dt * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>

            <div className="shortForecast-box-btn">
              <button className="shortForecast-btn-hourly">
                Hourly forecast
              </button>
              <button className="shortForecast-btn-weekly">
                Weekly forecast
              </button>
            </div>

            <div className="shortForecast-box-date">
              <p className="shortForecast-date">
                {new Date(item.dt * 1000).toLocaleDateString("uk-UA")}
              </p>
              <div className="shortForecast-line"></div>
              <p className="shortForecast-day">
                {new Date(item.dt * 1000).toLocaleDateString("uk-UA", {
                  weekday: "long",
                })}
              </p>
            </div>

            {item.weather?.[0]?.icon && (
              <img
                className="shortForecast-temp-img"
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt="weather icon"
              />
            )}

            <p className="shortForecast-temp">{Math.round(item.main.temp)}°C</p>

            <div className="shortForecast-lower-panel">
              <img
                className="shortForecast-refresh"
                src={refresh}
                alt="refresh"
              />
              <img className="shortForecast-heart" src={heart} alt="heart" />
              <button
                className="shortForecast-btn-seeMore"
                onClick={() => {
                  setBtnSeeMoreOpen(true);
                  setSelectedWeather(item);
                }}
              >
                See more
              </button>
              <img
                className="shortForecast-delete"
                onClick={() => handleDelete(item.id)}
                src={SvgDelete}
                alt="SvgDelete"
              />
            </div>
          </div>
        ))}
      </section>
      {btnSeeMoreOpen && <WeatherDetails weatherData={selectedWeather} />}
      {btnSeeMoreOpen && <HourlyForecast hourly={hourlyData} />}
    </>
  );
};
