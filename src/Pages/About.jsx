import React from "react";
import Sidenav from "../Components/Sidenav";
import { Box } from "@mui/material";
import Navbar from "../Components/Navbar";
// import Typography from '@mui/material/Typography';


export default function About() {
    return (
        <>
        <Navbar/>
        <Box height={30}/>
        <Box sx={{display:"flex"}}>
            <Sidenav/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>Dashboard</h1>
            </Box>
        </Box>
        </>
    )
}