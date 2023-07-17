// import { Navigate } from "react-router-dom";
// import { Dashboard } from "@mui/icons-material";
import  LoginForm  from "../Pages/LoginForm";
import Register from "../Pages/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Settings from "../Pages/Settings"
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";



export const AppNavigation = () => {
  // const { loading, user } = useContext(AuthContext);

    return (
        <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<LoginForm/>}></Route>
          <Route path="/register" exact element={<Register/>}></Route>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/dashboard" exact element={<About/>}></Route>
          <Route path="/settings" exact element={<Settings/>}></Route>
          
        </Routes>
        </BrowserRouter>
    )
}