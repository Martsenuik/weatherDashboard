import { Chart } from "react-chartjs-2";
import "./chartForecast.css";
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

export const ChartForecast = ({ selectedWeather }) => {
  const [chartForecastData, setChartForecastData] = useState([]);
  const [whichIsDevice, setWhichIsDevice] = useState("desktop");

  useEffect(() => {
    if (!selectedWeather) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${selectedWeather.lat}&lon=${selectedWeather.lon}&exclude=minutely,hourly,alerts&units=metric&appid=4123d083fddc9b79658e5081743833f9`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data?.list) return;

        const dailyForecast = data.list.filter((item) =>
          item.dt_txt.includes("12:00:00"),
        );

        setChartForecastData(dailyForecast);
      });

    const updateDevice = () => {
      if (window.innerWidth < 768) {
        setWhichIsDevice("mobile");
      } else if (window.innerWidth < 1024) {
        setWhichIsDevice("tablet");
      } else {
        setWhichIsDevice("desktop");
      }
    };

    updateDevice();
    window.addEventListener("resize", updateDevice);

    return () => window.removeEventListener("resize", updateDevice);
  }, [selectedWeather]);

  let indexToSliceChart =
    whichIsDevice === "mobile" ? 3 : whichIsDevice === "tablet" ? 4 : 5;

  const slicedData = chartForecastData.slice(0, indexToSliceChart);

  const data = {
    labels: slicedData.map((item) =>
      new Date(item.dt * 1000).toLocaleDateString("en-US", {
        weekday: "short",
      }),
    ),

    datasets: [
      {
        label: "Temperature",
        data: slicedData.map((item) => item.main.temp),
        borderColor: "rgba(255, 179, 108, 1)",
        backgroundColor: "#aeaeae",
        tension: 0.6,
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
    <section className="chartForecast">
      <div
        className="chartForecast-box"
        style={{ height: "250px", marginTop: "20px" }}
      >
        <Chart className="chart" type="line" data={data} options={options} />
      </div>
    </section>
  );
};
