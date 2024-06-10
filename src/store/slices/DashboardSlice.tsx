import { Slice, createSlice } from "@reduxjs/toolkit";
import { DashboardDataProp } from "../@types/DashboardTypes";

export const initialState: DashboardDataProp = {
  query_data: "",
  main_weather_data: null,
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
  },
});

export const { handleStoreMainWeatherData, handleStoreQueryData } =
  DashboardSlice.actions;
export default DashboardSlice.reducer;
