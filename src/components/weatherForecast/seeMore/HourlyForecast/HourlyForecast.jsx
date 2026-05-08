import { Chart } from "react-chartjs-2";
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
      `https://api.openweathermap.org/data/3.0/onecall?lat=${selectedWeatherData.lat}&lon=${selectedWeatherData.lon}&units=metric&appid=4123d083fddc9b79658e5081743833f9`,
    )
      .then((res) => res.json())
      .then((result) => {
        setHourlyForecastData(result.hourly || []);
      });
  }, [selectedWeatherData]);

  const getHourlyFromNow = () => {
    if (!hourlyForecastData.length) return [];

    const now = new Date().getHours();

    const startIndex = hourlyForecastData.findIndex((item) => {
      return new Date(item.dt * 1000).getHours() === now;
    });

    if (startIndex === -1) return hourlyForecastData.slice(0, 24);

    return hourlyForecastData.slice(startIndex, startIndex + 24);
  };

  const currentTemp = selectedWeatherData?.temp;

  const temperature = () => {
    if (currentTemp === undefined) return [];

    return [
      currentTemp - 10,
      currentTemp - 5,
      currentTemp,
      currentTemp + 5,
      currentTemp + 10,
    ];
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
        data: temperature(),
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

  if (!filtered.length) {
    return <div>Завантаження...</div>;
  }

  return (
    <div style={{ height: "250px", marginTop: "20px" }}>
      <Chart type="line" data={data} options={options} />
    </div>
  );
};
