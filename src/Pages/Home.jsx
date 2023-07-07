import React from "react";
import Navbar from "../Components/Navbar";
import Sidenav from "../Components/Sidenav";
import { Box } from "@mui/material";
// import Typography from '@mui/material/Typography';
import {useState, useEffect} from "react";
import { useDropzone } from "react-dropzone";


export default function Home() {
    const [files, setFiles] = useState([]);
    const {
        isDragOver,
        isDropped,
        getRootProps,
        open,
        close,
    } = useDropzone({
        accept:".png, .jpg, .jpeg",
        maxFiles:3,
    });
    useEffect(() =>{
        if(isDropped){
    })
    return (
        <>
        <Navbar/>
        <Box height={30}/>
        <Box sx={{display:"flex"}}>
            <Sidenav/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>Home</h1>
            </Box>
        </Box>
        </>
    )
}