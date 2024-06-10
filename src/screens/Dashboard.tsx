import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import classes from "./Dashboard.module.css";
import MainWeather from "../components/MainWeather/MainWeather";
import Forecast from "../components/Forecast/Forecast";
import { Col, Row } from "react-bootstrap";
import { MainContext } from "../shared/Context";
import { getWeatherBysearchKeyService } from "../services/services";
import { AxiosError, AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { handleStoreMainWeatherData } from "../store/slices/DashboardSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const getWeatherData = (value: string) => {
    getWeatherBysearchKeyService({
      q: value,
    })
      .then((response: AxiosResponse) => {
        if (response.data) {
          dispatch(handleStoreMainWeatherData(response.data));
        }
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  };

  const contextValues = { getWeatherData };

  return (
    <MainContext.Provider value={contextValues}>
      <div className={classes.rootSec}>
        <div className={classes.headerSec}>
          <Row
            style={{
              width: "100%",
            }}
          >
            <Col md={6}>
              <div>
                <h2>Toronto</h2>
                <p>Thursday,31 August 2023 | 10:15 PM</p>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.searchbarSec}>
                <SearchBar />
              </div>
            </Col>
          </Row>
        </div>
        <MainWeather />
        <Forecast />
      </div>
    </MainContext.Provider>
  );
}

export default Dashboard;
