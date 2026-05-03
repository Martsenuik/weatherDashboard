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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Tooltip,
  Legend,
);

export const HourlyForecast = ({ hourly }) => {
  const labels = hourly.slice(0, 20).map((item) => {
    const date = new Date(item.dt * 1000);
    return date.getHours().toString().padStart(2, "0") + ":00";
  });

  const data = hourly.slice(0, 20).map((item) => item.temp);

  return (
    <div style={{ height: "250px", marginTop: "20px" }}>
      <Chart
        type="line"
        data={{
          labels,
          datasets: [
            {
              label: "Temperature",
              data,
              borderWidth: 2,
              tension: 0.4,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: {
              grid: { display: false },
            },
            y: {
              grid: { display: false },
            },
          },
        }}
      />
    </div>
  );
};
