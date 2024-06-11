import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainRoute } from "./routes/MainRoute";

function App() {
  const router = createBrowserRouter(MainRoute, { basename: "/" });
  return <RouterProvider router={router} />;
}

export default App;
