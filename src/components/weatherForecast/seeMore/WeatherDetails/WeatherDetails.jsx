import "./weatherDetails.css";
import { getDataWeatherDetails } from "./DataWeatherDetails";

export const WeatherDetails = ({ weatherData }) => {
  const data = getDataWeatherDetails(weatherData);
  return (
    <section className="weatherDetails">
      <ul className="weatherDetails-list">
        {data.map(({ type, name, img, index }) => {
          return (
            <li className="weatherDetails-item" key={index}>
              <p className="weatherDetails-type-text">{type}</p>
              <p className="weatherDetails-name-text">{name}</p>
              <img
                className="weatherDetails-img"
                src={img}
                alt="weather icon"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
