import "./weatherDetails.css";
import { getDataWeatherDetails } from "./DataWeatherDetails";

export const WeatherDetails = ({ weatherData }) => {
  const data = getDataWeatherDetails(weatherData);
  return (
    <section>
      <ul>
        {data.map(({ type, name, img }) => {
          return (
            <li key={name}>
              <p>{type}</p>
              <p>{name}</p>
              <img src={img} alt="weather icon" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
