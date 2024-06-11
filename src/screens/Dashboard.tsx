import { useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import classes from "./Dashboard.module.css";
import MainWeather from "../components/MainWeather/MainWeather";
import Forecast from "../components/Forecast/Forecast";
import { Col, Placeholder, Row } from "react-bootstrap";
import { MainContext } from "../shared/Context";
import {
  getForcastService,
  getWeatherBysearchKeyService,
} from "../services/services";
import { AxiosError, AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import {
  handleForeCastWeatherErrorStatus,
  handleResetForecastWeatherErrorStatus,
  handleStoreForecastWeatherData,
  handleStoreMainWeatherData,
  handleStoreisFetchingStatus,
  handleUpdateMainWeatherErrorStatus,
} from "../store/slices/DashboardSlice";
import {
  useMainWeatherData,
  useIsFetching,
} from "../store/values/Dashboardslicevalues";
import { mainWeatherDataProps } from "../@types/Reduxvaluetypes";
import moment from "moment";
import { WeatherBysearchKeyServiceType } from "../services/servicetypes";
import { getHandledErrorMessage } from "../shared/Utility";
import SomethingWentWrongImage from "../assets/png/something_went_wrong.png";

function Dashboard() {
  const dispatch = useDispatch();
  const mainWeatherData: mainWeatherDataProps | null = useMainWeatherData();
  const isFetching = useIsFetching();

  const getForcastData = (id: number) => {
    dispatch(handleStoreisFetchingStatus("forecast"));
    getForcastService({
      id,
    })
      .then((response: AxiosResponse) => {
        if (response.data && response.data.list) {
          dispatch(handleStoreForecastWeatherData(response.data.list));
        }
      })
      .catch((error: AxiosError) => {
        dispatch(handleStoreForecastWeatherData(null));
        dispatch(
          handleForeCastWeatherErrorStatus(getHandledErrorMessage(error))
        );
      })
      .finally(() => {
        dispatch(handleStoreisFetchingStatus(null));
      });
  };

  const getWeatherData = (value: WeatherBysearchKeyServiceType) => {
    dispatch(handleStoreisFetchingStatus("main"));
    getWeatherBysearchKeyService(value)
      .then((response: AxiosResponse) => {
        if (response.data) {
          const { main, id }: mainWeatherDataProps = response.data;
          const celcius = main.temp;
          const calculatedFah = celcius * (9 / 5) + 32;
          let finalMain = {
            ...main,
            celsius: celcius,
            fahrenheit: calculatedFah,
          };
          dispatch(
            handleStoreMainWeatherData({ ...response.data, main: finalMain })
          );
          dispatch(handleStoreisFetchingStatus("forecast"));
          getForcastData(id);
        } else {
          dispatch(handleStoreisFetchingStatus(null));
          dispatch(handleStoreForecastWeatherData(null));
          dispatch(handleStoreMainWeatherData(null));
        }
      })
      .catch((error: AxiosError) => {
        dispatch(handleStoreisFetchingStatus(null));
        dispatch(handleStoreForecastWeatherData(null));
        dispatch(handleStoreMainWeatherData(null));
        dispatch(handleResetForecastWeatherErrorStatus(null));
        dispatch(
          handleUpdateMainWeatherErrorStatus(getHandledErrorMessage(error))
        );
      });
  };

  const HeaderSec = () => {
    if (isFetching === "main") {
      return (
        <div>
          <Placeholder as={"h2"} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
        </div>
      );
    } else if (mainWeatherData) {
      const { name } = mainWeatherData;
      return (
        <div>
          <h2>{name}</h2>
          <p>{moment().format("dddd, Do MMMM YYYY | hh:mm A")}</p>
        </div>
      );
    }
    return null;
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getWeatherData({
          lat: position.coords.latitude,
          lon: position.coords.latitude,
        });
      },
      () => {
        dispatch(
          handleUpdateMainWeatherErrorStatus({
            status: true,
            image_alt: "something_went_wrong",
            image: SomethingWentWrongImage,
            message:
              "Oops, something went wrong while fetching your location. Please try again later.",
          })
        );
        dispatch(handleStoreisFetchingStatus(null));
      }
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const contextValues = { getWeatherData, getCurrentLocation };

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
              <HeaderSec />
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
