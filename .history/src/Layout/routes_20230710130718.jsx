import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import Resume from "../Pages/Resume/Resume";
import Contact from "../Pages/Contact/Contact";
import Details from "../Pages/Details/Details";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/projects', element: <Projects /> },
      { path: '/resume', element: <Resume /> },
      { path: '/contact', element: <Contact /> },
      { path: '/details/:id', element: <Details />, 
      loader: async ({ params }) => {
        return fetch(` https://portfolio-server-1tzn.onrender.com/projects/${params.id}`);
      },
    }
    ]
  }
]);

export default router;