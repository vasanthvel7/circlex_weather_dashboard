import React, { useEffect } from "react";
import classes from "./MainWeather.module.css";
import CloudImg from "../../assets/png/cloudy.png";
import { Col, Row } from "react-bootstrap";

function MainWeather() {
  return (
    <div className={classes.mainSec}>
      <Row
        style={{
          width: "100%",
        }}
      >
        <Col md={6}>
          <div className={classes.leftSec}>
            <h1>15</h1>
            <div className={classes.celciusSec}>
              <p>°C | °F</p>
              <span>Partly Cloudly</span>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className={classes.rightSec}>
            <img src={CloudImg} />
            <div className={classes.infosec}>
              <p>
                <span className="material-symbols-outlined">thermometer</span>
                Feels Like : 31°C
              </p>
              <p>
                <span className="material-symbols-outlined">water_drop</span>
                Humidity : 15%
              </p>
              <p>
                <span className="material-symbols-outlined">air</span>Wind : 14
                Km/h
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MainWeather;
