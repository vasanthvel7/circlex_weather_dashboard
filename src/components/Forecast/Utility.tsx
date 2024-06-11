import moment from "moment";
import classes from "./Forecast.module.css";
import { forecastWeatherDataProps } from "../../@types/Reduxvaluetypes";
import {
  groupedByDateProp,
  singleDayForecastofDay,
} from "../../@types/commonProps";
import { WEATHER_ICON_URL } from "../../shared/Constants";

export function SingleDayForeCast({ keydata, value }: singleDayForecastofDay) {
  if (value.length !== 0) {
    const startTimeofADay = value[0];
    const { weather, main } = startTimeofADay;
    const weatherData = weather[0];
    var dayOfWeek = moment(keydata, "YYYY-MM-DD").format("dddd");

    return (
      <div className={classes.singleForecast}>
        <p className={classes.date}>{dayOfWeek}</p>
        <img
          alt={weatherData.main}
          src={WEATHER_ICON_URL + weatherData.icon + "@4x.png"}
        />
        {main.temp_min.toFixed(0) === main.temp_max.toFixed(0) ? (
          <p className={classes.celcius}>{main.temp_max.toFixed(0)}°C</p>
        ) : (
          <p className={classes.celcius}>
            {main.temp_min.toFixed(0)}
            °C - {main.temp_max.toFixed(0)}°C
          </p>
        )}
        <p className={classes.weatherType}>{weatherData.main}</p>
      </div>
    );
  }
  return null;
}

function isWithinMaxDays(dateString: string, max_count: number) {
  const givenDate = moment(dateString, "YYYY-MM-DD");
  const currentDate = moment();
  const diffInDays = Math.abs(givenDate.diff(currentDate, "days"));

  return diffInDays < max_count - 1;
}

export function splitArrayByDate(
  dataArray: forecastWeatherDataProps[],
  maxdays: number = 5
) {
  const groupedByDate: groupedByDateProp = {};
  dataArray.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (isWithinMaxDays(date, maxdays)) {
      if (!groupedByDate[date]) {
        groupedByDate[date] = [];
      }
      groupedByDate[date].push(item);
    }
  });

  return groupedByDate;
}
