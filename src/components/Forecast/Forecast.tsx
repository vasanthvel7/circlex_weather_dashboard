import React from "react";
import { SingleDayForeCast } from "./Utility";
import classes from "./Forecast.module.css";
import { Col, Row } from "react-bootstrap";

function Forecast() {
  const ForecastDays = [...new Array(5)];

  return (
    <div className={classes.forcastContainer}>
      <Row>
        {ForecastDays.map((ele, index) => (
          <Col key={`col` + index}>
            <SingleDayForeCast />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Forecast;
