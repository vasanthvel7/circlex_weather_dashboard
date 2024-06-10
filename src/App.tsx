import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainRoute } from "./routes/MainRoute";
import { useAppSelector } from "./store/StoreHook";

function App() {
  const router = createBrowserRouter(MainRoute, { basename: "/" });
  return <RouterProvider router={router} />;
}

export default App;
