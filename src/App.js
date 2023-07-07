import React from "react";
// import Sidenav from "./Components/Sidenav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Settings from "./Pages/Settings";


export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/dashboard" exact element={<About/>}></Route>
        <Route path="/settings" exact element={<Settings/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}