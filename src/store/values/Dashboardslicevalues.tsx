import { useAppSelector } from "../StoreHook";

export const useQueryData = () => {
  return useAppSelector((state) => state.dashboard.query_data);
};

export const useMainWeatherData = () => {
  return useAppSelector((state) => state.dashboard.main_weather_data);
};
