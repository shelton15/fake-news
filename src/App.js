import React from "react";
// import Sidenav from "./Components/Sidenav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Settings from "./Pages/Settings";
import  LoginForm  from "./Pages/LoginForm";
import Register from "./Pages/Register";
import { AuthProvider } from "./context/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/dashboard" exact element={<About/>}></Route>
        <Route path="/settings" exact element={<Settings/>}></Route>
        <Route path="/login" exact element={<LoginForm/>}></Route>
        <Route path="/register" exact element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}