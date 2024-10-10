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
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to={"/login"} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
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
