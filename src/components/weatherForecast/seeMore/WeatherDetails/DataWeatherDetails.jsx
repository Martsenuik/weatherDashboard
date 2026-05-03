import thermometer from "../../../../images/svg/thermometer.svg";
import speedometer from "../../../../images/svg/speedometer.svg";
import wind from "../../../../images/svg/wind.svg";
import eye from "../../../../images/svg/eye.svg";
import cloud from "../../../../images/svg/cloud.svg";

export const getDataWeatherDetails = (weatherData) => [
  {
    type: "Feels like",
    name: weatherData.main.feels_like,
    img: thermometer,
  },
  // {
  //   minTemp: "Min ℃",
  //   minTempValue: weatherData.main.temp_min,
  //   maxTemp: "Max ℃",
  //   maxTempValue: weatherData.main.temp_max,
  // },
  {
    type: "Humidity",
    name: `${weatherData.main.humidity} %`,
    img: cloud,
  },
  {
    type: "Pressure",
    name: `${weatherData.main.pressure} Pa`,
    img: speedometer,
  },
  {
    type: "Wind speed",
    name: `${weatherData.wind.speed} m/s`,
    img: wind,
  },
  {
    type: "Visibility",
    name: weatherData.visibility,
    img: eye,
  },
];
