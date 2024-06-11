import { useAppSelector } from "../StoreHook";

export const useDashboard = () => {
  return useAppSelector((state) => state.dashboard);
};

export const useQueryData = () => {
  return useAppSelector((state) => state.dashboard.query_data);
};

export const useMainWeatherData = () => {
  return useAppSelector((state) => state.dashboard.main_weather_data);
};

export const useForeCastWeatherData = () => {
  return useAppSelector((state) => state.dashboard.forecast_weather_data);
};

export const useIsFetching = () => {
  return useAppSelector((state) => state.dashboard.isfetching);
};

export const useMainComponentError = () => {
  return useAppSelector((state) => state.dashboard.main_weather_data_error);
};

export const useForecastComponentError = () => {
  return useAppSelector((state) => state.dashboard.forecast_weather_data_error);
};
