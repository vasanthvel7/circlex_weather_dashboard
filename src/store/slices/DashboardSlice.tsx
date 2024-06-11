import { Slice, createSlice } from "@reduxjs/toolkit";
import { DashboardDataProp } from "../../@types/Reduxvaluetypes";

export const initialState: DashboardDataProp = {
  query_data: "",
  main_weather_data: null,
  forecast_weather_data: null,
  isfetching: "main",
  main_weather_data_error: {
    status: false,
    image_alt: "",
    message: "",
    image: "",
  },
  forecast_weather_data_error: {
    status: false,
    image_alt: "",
    message: "",
    image: "",
  },
};

const DashboardSlice: Slice = createSlice({
  name: "DashboardSlice",
  initialState,
  reducers: {
    handleStoreQueryData: (state, action) => {
      state.query_data = action.payload;
    },
    handleStoreMainWeatherData: (state, action) => {
      state.main_weather_data = action.payload;
    },
    handleStoreForecastWeatherData: (state, action) => {
      state.forecast_weather_data = action.payload;
    },
    handleStoreisFetchingStatus: (state, action) => {
      state.isfetching = action.payload;
    },
    handleUpdateMainWeatherErrorStatus: (state, action) => {
      state.main_weather_data_error = {
        ...state.main_weather_data_error,
        ...action.payload,
      };
    },
    handleResetMainWeatherErrorStatus: (state, action) => {
      state.main_weather_data_error = {
        status: false,
        message: "",
        image: "",
        image_alt: "",
      };
    },
    handleForeCastWeatherErrorStatus: (state, action) => {
      state.forecast_weather_data_error = {
        ...state.forecast_weather_data_error,
        ...action.payload,
      };
    },
    handleResetForecastWeatherErrorStatus: (state, action) => {
      state.forecast_weather_data_error = {
        status: false,
        message: "",
        image: "",
        image_alt: "",
      };
    },
  },
});

export const {
  handleStoreMainWeatherData,
  handleStoreQueryData,
  handleStoreForecastWeatherData,
  handleStoreisFetchingStatus,
  handleUpdateMainWeatherErrorStatus,
  handleForeCastWeatherErrorStatus,
  handleResetMainWeatherErrorStatus,
  handleResetForecastWeatherErrorStatus,
} = DashboardSlice.actions;
export default DashboardSlice.reducer;
