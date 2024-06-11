type coordProps = {
  lon: number;
  lat: number;
};

type weatherProps = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type MainProp = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  celsius: number;
  fahrenheit: number;
  sea_level?: number;
  grnd_level?: number;
  temp_kf?: number;
};

type windProp = {
  speed: number;
  deg: number;
  gust?: number;
};

type cloudsProp = {
  all: number;
};

type sysProp = {
  type?: number;
  id?: number;
  country?: string;
  sunrise?: number;
  sunset?: number;
  pod?: string;
};

export type mainWeatherDataProps = {
  coord: coordProps;
  weather: weatherProps[];
  base: string;
  main: MainProp;
  visibility: number;
  wind: windProp;
  clouds: cloudsProp;
  dt: number;
  sys: sysProp;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type forecastWeatherDataProps = {
  dt: number;
  main: MainProp;
  weather: weatherProps[];
  clouds: cloudsProp;
  wind: windProp;
  visibility: number;
  pop: number;
  sys: sysProp;
  dt_txt: string;
};

type DataErrorProp = {
  status: boolean;
  message: string;
  image: string;
  image_alt: string;
};

export type DashboardDataProp = {
  query_data: string;
  main_weather_data: mainWeatherDataProps | null;
  forecast_weather_data: forecastWeatherDataProps[] | null;
  isfetching: "main" | "forecast" | null;
  main_weather_data_error: DataErrorProp | null;
  forecast_weather_data_error: DataErrorProp | null;
};
