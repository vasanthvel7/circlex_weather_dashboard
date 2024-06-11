import { WEATHER_API_KEY } from "../shared/Constants";
import axios from "./axios";
import {
  ForecastServiceType,
  WeatherBysearchKeyServiceType,
} from "./servicetypes";

export const getWeatherBysearchKeyService = (
  paramsData: WeatherBysearchKeyServiceType
) => {
  return axios.get("weather", {
    params: { ...paramsData, appid: WEATHER_API_KEY, units: "metric" },
    paramsSerializer: (params) => {
      let result = "";
      Object.keys(params).forEach((key) => {
        result += `${key}=${encodeURIComponent(params[key])}&`;
      });
      return result.substring(0, result.length - 1);
    },
  });
};

export const getForcastService = (paramsData: ForecastServiceType) => {
  return axios.get("forecast", {
    params: { ...paramsData, appid: WEATHER_API_KEY, units: "metric" },
    paramsSerializer: (params) => {
      let result = "";
      Object.keys(params).forEach((key) => {
        result += `${key}=${encodeURIComponent(params[key])}&`;
      });
      return result.substring(0, result.length - 1);
    },
  });
};
