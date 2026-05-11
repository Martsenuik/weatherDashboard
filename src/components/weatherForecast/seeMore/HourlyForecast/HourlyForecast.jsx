import { Chart } from "react-chartjs-2";
import "./hourlyForecast.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Tooltip,
  Legend,
} from "chart.js";

import { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,

  LinearScale,

  PointElement,

  LineElement,

  LineController,

  Tooltip,

  Legend,
);

export const HourlyForecast = ({ selectedWeatherData }) => {
  const [hourlyForecastData, setHourlyForecastData] = useState([]);

  useEffect(() => {
    if (!selectedWeatherData?.lat || !selectedWeatherData?.lon) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${selectedWeatherData.lat}&lon=${selectedWeatherData.lon}&exclude=minutely,daily,alerts&units=metric&appid=4123d083fddc9b79658e5081743833f9`,
    )
      .then((res) => res.json())

      .then((result) => {
        console.log(result);

        setHourlyForecastData(result.hourly || []);
      });
  }, [selectedWeatherData]);

  const getHourlyFromNow = () => {
    return hourlyForecastData.slice(0, 5);
  };
  const filtered = getHourlyFromNow();

  const data = {
    labels: filtered.map((item) => {
      const date = new Date(item.dt * 1000);

      return date.getHours() + ":00";
    }),

    datasets: [
      {
        label: "Temperature",

        data: filtered.map((item) => item.temp),

        borderColor: "blue",

        backgroundColor: "lightblue",
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <section className="hourlyForecast">
      <div style={{ height: "250px", marginTop: "20px" }}>
        <Chart type="line" data={data} options={options} />
      </div>
    </section>
  );
};
