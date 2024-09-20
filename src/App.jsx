import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import "./Styles/index.css";
import AppLayout from "./Components/AppLayout";
import HomePage from "./Pages/HomePage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to={"/movies"} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<AppLayout />}>
        <Route path="/movies" element={<HomePage />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
