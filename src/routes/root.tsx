import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Main from "../pages/Main";
import Flag from "../pages/Flag";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/rest-countries-api" element={<Main />}></Route>
      <Route
        path="/rest-countries-api/flag/:flagName"
        element={<Flag />}
      ></Route>
    </>
  )
);
