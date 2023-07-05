import React from "react";
import Sidenav from "../Components/Sidenav";
import { Box } from "@mui/material";
// import Typography from '@mui/material/Typography';


export default function About() {
    return (
        <>
        <Box sx={{display:"flex"}}>
            <Sidenav/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>About</h1>
            </Box>
        </Box>
        </>
    )
}