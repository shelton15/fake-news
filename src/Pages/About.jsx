import React from "react";
import Sidenav from "../Components/Sidenav";
import { Box } from "@mui/material";
import Navbar from "../Components/Navbar";
// import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ImageTable() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/images")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  function deleteImage(id) {
    fetch(`/api/images/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then(() => {
        const updatedImages = images.filter((image) => image.id !== id);
        setImages(updatedImages);
      });
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Image ID</TableCell>
            <TableCell>Image URL</TableCell>
            <TableCell>Image Prediction</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {images.map((image) => (
            <TableRow key={image.id}>
              <TableCell>{image.id}</TableCell>
              <TableCell>{image.url}</TableCell>
              <TableCell>{image.description}</TableCell>
              <TableCell>
                <IconButton onClick={() => deleteImage(image.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function About() {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Dashboard</h1>
          <ImageTable />
        </Box>
      </Box>
    </>
  );
}