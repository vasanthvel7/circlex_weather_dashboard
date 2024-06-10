import classes from "./Forecast.module.css";
import CloudImg from "../../assets/png/cloudy.png";

export function SingleDayForeCast() {
  return (
    <div className={classes.singleForecast}>
      <p className={classes.date}>Thursday</p>
      <img src={CloudImg} />
      <p className={classes.celcius}>23°C - 14°C</p>
      <p className={classes.weatherType}>Overcast Clouds</p>
    </div>
  );
}
