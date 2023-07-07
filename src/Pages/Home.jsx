import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidenav from "../Components/Sidenav";
import { Box } from "@mui/material";
import { useDropzone } from "react-dropzone";

export default function Home() {
  const Dropzone = ({ onDrop }) => {
    const [files, setFiles] = useState([]);
    const {
      isDragActive,
      getRootProps,
      getInputProps,
    } = useDropzone({
      accept: ".png, .jpg, .jpeg",
      maxFiles: 3,
      onDrop: (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
        onDrop(acceptedFiles);
      },
    });

    useEffect(() => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
      <>
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop files here...</p>
          ) : (
            <p>Drag and drop files here, or click to select files</p>
          )}
        </div>
        {files.length > 0 && (
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                <img src={file.preview} alt={file.name} />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  };

  const handleDrop = (acceptedFiles) => {
    console.log("Files dropped:", acceptedFiles);
  };

  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Home</h1>
        </Box>
        <Dropzone onDrop={handleDrop} />
      </Box>
    </>
  );
}