import "./App.css";
import { Navbar } from "./components/Navbar";
import { Comics } from "./components/Comics";
import { Characters } from "./components/Characters";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error404 } from "./components/Error404";
import { Home } from "./components/Home";

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
