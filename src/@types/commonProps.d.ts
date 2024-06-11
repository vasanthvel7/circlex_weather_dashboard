import { forecastWeatherDataProps } from "./Reduxvaluetypes";

export type ErrorComponentProps = {
  image: string;
  image_alt: string;
  message: string;
};

export type forcastObjectProp = {
  keystring: string;
  valuedata: forecastWeatherDataProps[];
};

export type forcastEntries<T> = {
  [K in keyof T]: [K, forecastWeatherDataProps[]];
}[keyof T][];

export type singleDayForecastofDay = {
  keydata: string;
  value: forecastWeatherDataProps[];
};

export type groupedByDateProp = {
  [key: string]: forecastWeatherDataProps[];
};
