import { Link, createBrowserRouter } from "react-router-dom";
// import Main from "./Main";
// import Home from "../Pages/Home/Home";




const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to="about">About Us</Link>
        </div>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

export default router;