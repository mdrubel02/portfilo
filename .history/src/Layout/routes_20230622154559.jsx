import { Link, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
// import Main from "./Main";
// import Home from "../Pages/Home/Home";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default router;