import { Navigate } from "react-router-dom";
import { Dashboard } from "@mui/icons-material";
import  LoginForm  from "../Pages/LoginForm";
import Register from "../Pages/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";



export const AppNavigation = () => {
  const { loading, user } = useContext(AuthContext);

    return (
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
    )
}