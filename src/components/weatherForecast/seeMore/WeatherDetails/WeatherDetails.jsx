import "./weatherDetails.css";
import { getDataWeatherDetails } from "./DataWeatherDetails";

export const WeatherDetails = ({ weatherData }) => {
  if (!weatherData?.main) return null;
  const data = getDataWeatherDetails(weatherData);
  return (
    <section className="weatherDetails">
      <ul className="weatherDetails-list">
        {data.map((item, index) => {
          if (item.minTemp || item.maxTemp) {
            return (
              <li className="weatherDetails-item" key={index}>
                <p className="weatherDetails-type-text">{item.minTemp}</p>
                <p className="weatherDetails-name-text">{item.minTempValue}</p>
                <p className="weatherDetails-type-text">{item.maxTemp}</p>
                <p className="weatherDetails-name-text">{item.maxTempValue}</p>
              </li>
            );
          }
          return (
            <li className="weatherDetails-item" key={index}>
              <p className="weatherDetails-type-text">{item.type}</p>
              <p className="weatherDetails-name-text">{item.name}</p>
              <img
                className="weatherDetails-img"
                src={item.img}
                alt="weather icon"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
