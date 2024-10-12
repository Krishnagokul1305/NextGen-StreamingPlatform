import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./Styles/index.css";

import AppLayout from "./Components/AppLayout";
import HomePage from "./Pages/HomePage";
import Auth from "./Pages/Auth";
import SignUpForm from "./Features/Auth/SignUpForm";
import ForgotPasswordForm from "./Features/Auth/ForgotPasswordForm";
import ResetPasswordForm from "./Features/Auth/ResetPasswordForm";
import LoginForm from "./Features/Auth/LoginForm";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to={"/login"} />} />
      <Route element={<Auth />}>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        <Route path="/reset-password/:resetToken" element={<ResetPasswordForm />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path="/movies" element={<HomePage />} />
      </Route>
    </>
  )
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={routes} />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
