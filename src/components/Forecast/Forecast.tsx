import { Col, Placeholder, Row } from "react-bootstrap";
import { SingleDayForeCast, splitArrayByDate } from "./Utility";
import classes from "./Forecast.module.css";
import { useDashboard } from "../../store/values/Dashboardslicevalues";
import { ForCastErrorComponent } from "../ErrorComponent/ErrorComponent";
import { forcastEntries, forcastObjectProp } from "../../@types/commonProps";

function Forecast() {
  const { isfetching, forecast_weather_data, forecast_weather_data_error } =
    useDashboard();

  if (isfetching) {
    return (
      <div className={classes.loadingContainer}>
        <Row>
          <Placeholder as={"div"} animation="glow" size="lg">
            <Placeholder xs={12} />
          </Placeholder>
        </Row>
      </div>
    );
  }

  if (forecast_weather_data) {
    const splitByDateValues = splitArrayByDate(forecast_weather_data, 5);
    const entries: forcastEntries<forcastObjectProp> = Object.entries(
      splitByDateValues
    ) as forcastEntries<forcastObjectProp>;
    return (
      <>
        <h2
          style={{
            textAlign: "center",
            padding: "10px 0",
          }}
        >
          Forecast
        </h2>
        <div className={classes.forcastContainer}>
          <Row>
            {entries.map(([keystring, valuedata], index) => {
              return (
                <Col key={`col` + index}>
                  <SingleDayForeCast keydata={keystring} value={valuedata} />
                </Col>
              );
            })}
          </Row>
        </div>
      </>
    );
  } else {
    return forecast_weather_data_error.status ? (
      <ForCastErrorComponent {...forecast_weather_data_error} />
    ) : null;
  }
}

export default Forecast;
