import { configureStore } from "@reduxjs/toolkit";
import DashboardSlice from "./slices/DashboardSlice";

export const store = configureStore({
  reducer: {
    dashboard: DashboardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
