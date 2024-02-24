import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Projects from "./pages/Porjects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import CircleOfLife from "./pages/CircleOfLife";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "talk",
    element: <Contact />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "circle",
    element: <CircleOfLife />,
  },
]);