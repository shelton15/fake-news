import React from "react";
// import Sidenav from "./Components/Sidenav";

// import About from "./Pages/About";
// import Settings from "./Pages/Settings";

import { AuthProvider } from "./context/AuthProvider";
import { AppNavigation } from "./navigation/AppNavigation";


export default function App() {
  return (
    <AuthProvider>
     <AppNavigation/>
    </AuthProvider>
  )
}