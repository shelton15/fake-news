import React from "react";
// import Sidenav from "./Components/Sidenav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Settings from "./Pages/Settings";
import  LoginForm  from "./Pages/LoginForm";
import Register from "./Pages/Register";
import { AuthProvider } from "./context/AuthProvider";
import { AuthContext } from "./context/AuthProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Dashboard } from "@mui/icons-material";

export default function App() {
  const { loading, user } = useContext(AuthContext);
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<LoginForm/>}></Route>
        <Route path="/register" exact element={<Register/>}></Route>
        <Route
          path="/"
          element={
            loading ? (
              <div className="flex h-[100vh] justify-center items-center">
                {/* <Loader /> */}
              </div>
            ) : user ? (
              <Home />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            loading ? (
              <div className="flex h-[100vh] justify-center items-center">
                {/* <Loader /> */}
              </div>
            ) : user ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        <Route
          path="/settings"
          element={
            loading ? (
              <div className="flex h-[100vh] justify-center items-center">
                {/* <Loader /> */}
              </div>
            ) : user ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}