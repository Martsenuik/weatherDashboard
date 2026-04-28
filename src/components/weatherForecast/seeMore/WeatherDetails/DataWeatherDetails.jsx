export const getDataWeatherDetails = (weatherData) => [
  {
    type: "Feels like",
    name: weatherData.main.feels_like,
    img: weatherData.weather[0].icon,
  },
  {
    minTemp: "Min ℃",
    minTempValue: weatherData.main.temp_min,
    maxTemp: "Max ℃",
    maxTempValue: weatherData.main.temp_max,
  },
  {
    type: "Humidity",
    name: weatherData.main.humidity,
    img: weatherData.weather[0].icon,
  },
  {
    type: "Pressure",
    name: weatherData.main.pressure,
    img: weatherData.weather[0].icon,
  },
  {
    type: "Wind speed",
    name: weatherData.wind.speed,
    img: weatherData.weather[0].icon,
  },
  {
    type: "Visibility",
    name: weatherData.visibility,
    img: weatherData.weather[0].icon,
  },
];
