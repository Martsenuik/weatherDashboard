import { useState, useEffect } from "react";
import "./weeklyForecast.css";

export const WeeklyForecast = ({ selectedWeather }) => {
  const [weeklyForecast, setWeeklyForecast] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${selectedWeather.lat}&lon=${selectedWeather.lon}&exclude=minutely,hourly,alerts&units=metric&appid=4123d083fddc9b79658e5081743833f9`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (!data?.list) return;

        setWeeklyForecast(data.list.slice(0, 8));
      });
  }, [selectedWeather]);

  return (
    <section className="weeklyForecast">
      <div className="weeklyForecast-container">
        <p className="weeklyForecast-title-desktop">8-day forecast</p>
        <p className="weeklyForecast-title-tablet">Weekly forecast</p>
        <ul className="weeklyForecast-list">
          {weeklyForecast.map((item, index) => {
            const dayOfWeek = new Date(item.dt * 1000).toLocaleDateString(
              "en-US",
              {
                weekday: "short",
              },
            );

            const dateOfDay = new Date(item.dt * 1000).toLocaleDateString(
              "en-US",
              {
                day: "2-digit",
                month: "short",
              },
            );

            return (
              <li className="weeklyForecast-card" key={index}>
                <p className="weeklyForecast-date">
                  {dayOfWeek}, {dateOfDay}
                </p>
                <div className="weeklyForecast-box-middleOfCard">
                  <img
                    className="weeklyForecast-icon"
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt="weather icon"
                  />

                  <p className="weeklyForecast-temp">
                    {Math.round(item.main.temp)}°C
                  </p>
                </div>

                <p className="weeklyForecast-weather-description">
                  {item.weather[0].description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
