import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidenav from "../Components/Sidenav";
import { Box } from "@mui/material";
import { useDropzone } from "react-dropzone";
import "./Home.css";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);

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
      return () => {
        files.forEach((file) => URL.revokeObjectURL(file.preview));
      };
    }, [files]);

    const handleRemove = (file) => {
      const newFiles = files.filter((f) => f !== file);
      setFiles(newFiles);
      URL.revokeObjectURL(file.preview);
    };

    const handlePreviewClick = (file) => {
      setSelectedFile(file);
    };

    return (
      <>
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop files here...</p>
          ) : (
            <p>
              Drag and drop files here, or click to select files
            </p>
          )}
        </div>

        <div>
            <ul>
            <button className="verify-button">Verify News</button>
            </ul>
          </div>
          
        {files.length > 0 && (
          <div className="preview">
            <ul>
              {files.map((file, index) => (
                <li key={index}>
                  <div className="preview-image">
                    <img
                      src={file.preview}
                      alt={file.name}
                      onClick={() => handlePreviewClick(file)}
                    />
                    <p>{file.name}</p>
                  </div>
                  <button onClick={() => handleRemove(file)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  };

  const handleCloseModal = () => {
    setSelectedFile(null);
  };

  return (
    <>
      <Navbar />
      <Box height={20} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          height: "calc(100vh - 150px)", // adjust this to suit your needs
        }}
      >
        <Sidenav />
        <Dropzone sx={{marginLeft: 10}} />
        {selectedFile && (
          <div className="modal">
            <div className="modal-content">
              <img src={selectedFile.preview} alt={selectedFile.name} />
              <button onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        )}
      </Box>
    </>
  );
}