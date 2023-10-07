import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Comics } from "./components/Comics/Comics";
import { Events } from "./components/Events/Events";
import { Series } from "./components/Series/Series";
import Characters from "./components/Characters/Characters";
import { Home } from "./components/Home/Home";
import { Error404 } from "./components/Error404/Error404";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/characters",
    element: <Characters></Characters>,
  },
  {
    path: "/comics",
    element: <Comics></Comics>,
  },
  {
    path: "/events",
    element: <Events></Events>,
  },
  {
    path: "/series",
    element: <Series></Series>,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
function App() {
  return (
    <>
      <Navbar></Navbar>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
