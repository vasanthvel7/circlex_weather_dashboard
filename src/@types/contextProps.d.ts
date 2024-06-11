import { WeatherBysearchKeyServiceType } from "../services/servicetypes";

export type MainContextProps = {
  getWeatherData: (value: WeatherBysearchKeyServiceType) => void;
  getCurrentLocation: () => void;
};
