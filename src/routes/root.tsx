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
      <Route path="/" element={<Main />}></Route>
      <Route path="/flag/:flagName" element={<Flag />}></Route>
    </>
  )
);
