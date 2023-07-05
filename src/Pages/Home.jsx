import React from "react";
import Navbar from "../Components/Navbar";
import Sidenav from "../Components/Sidenav";
import { Box } from "@mui/material";
// import Typography from '@mui/material/Typography';


export default function Home() {
    return (
        <>
        <Navbar/>
        <Box sx={{display:"flex"}}>
            <Sidenav/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>Home</h1>
            </Box>
        </Box>
        </>
    )
}