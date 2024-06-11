import { Col, Placeholder, Row } from "react-bootstrap";
import classes from "./MainWeather.module.css";
import { useDashboard } from "../../store/values/Dashboardslicevalues";
import { WEATHER_ICON_URL } from "../../shared/Constants";
import { ErrorComponent } from "../ErrorComponent/ErrorComponent";

function MainWeather() {
  const { isfetching, main_weather_data, main_weather_data_error } =
    useDashboard();

  if (isfetching === "main") {
    return (
      <div className={classes.mainSec}>
        <Row
          style={{
            width: "100%",
          }}
        >
          <Col md={6}>
            <div className={`${classes.leftSec} ${classes.loadingSec}`}>
              <Placeholder as={"h1"} animation="glow" size="lg">
                <Placeholder xs={12} />
              </Placeholder>
            </div>
          </Col>
          <Col md={6}>
            <div className={`${classes.leftSec} ${classes.loadingSec}`}>
              <Placeholder as={"h1"} animation="glow" size="lg">
                <Placeholder xs={12} />
              </Placeholder>
            </div>
          </Col>
        </Row>
      </div>
    );
  } else if (main_weather_data) {
    const { wind, main, weather } = main_weather_data;
    const weatherData = weather[0];

    return (
      <>
        <h2
          style={{
            textAlign: "center",
            marginBottom: 0,
          }}
        >
          Today Weather
        </h2>
        <div className={classes.mainSec}>
          <Row
            style={{
              width: "100%",
            }}
          >
            <Col xs={5} md={5} lg={6}>
              <div className={classes.leftSec}>
                <h1>{main.celsius.toFixed(0)}</h1>
                <div className={classes.celciusSec}>
                  <p>°C</p>
                  <span>{weatherData.main}</span>
                </div>
              </div>
            </Col>
            <Col>
              <div className={classes.rightSec}>
                <img
                  alt={weatherData.main}
                  src={WEATHER_ICON_URL + weatherData.icon + "@4x.png"}
                />
                <div className={classes.infosec}>
                  <p>
                    <span className="material-symbols-outlined">
                      thermometer
                    </span>
                    Feels Like : {` ${main.feels_like} `}°C
                  </p>
                  <p>
                    <span className="material-symbols-outlined">
                      water_drop
                    </span>
                    Humidity : {` ${main.humidity} `}%
                  </p>
                  <p>
                    <span className="material-symbols-outlined">air</span>Wind :
                    {` ${wind.speed} `}Km/h
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  } else {
    return main_weather_data_error.status ? (
      <ErrorComponent {...main_weather_data_error} />
    ) : null;
  }
}

export default MainWeather;
