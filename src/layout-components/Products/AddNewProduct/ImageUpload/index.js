import React, { useState } from "react";
import {
  LinearProgress,
  Box,
  Typography,
  Button,
  ListItem,
  withStyles,
} from "@material-ui/core";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "#EEEEEE",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#0e9146",
  },
}))(LinearProgress);

export const ImageUpload = ({ selectFile, uploadOnChange }) => {
  const [ImageData, setImageData] = useState({
    selectedFiles: undefined,
    currentFile: undefined,
    progress: 0,
    message: "",
    isError: false,
    fileInfos: [],
  });
  const {
    selectedFiles,
    currentFile,
    progress,
    message,
    fileInfos,
    isError,
  } = ImageData;

  selectFile = (event) => {
    setImageData({
      selectedFiles: event.target.files,
    });
  };

  // const upload = (event) => {
  //   let currentFile = ImageData.selectedFiles[0];

  //   setImageData({
  //     progress: Math.round((100 * event.loaded) / event.total),
  //     currentFile: currentFile,
  //   });
  // };

  return (
    <div className="mg20">
      {currentFile && (
        <Box className="mb25" display="flex" alignItems="center">
          <Box width="100%" mr={1}>
            <BorderLinearProgress variant="determinate" value={progress} />
          </Box>
          <Box minWidth={35}>
            <Typography
              variant="body2"
              color="textSecondary"
            >{`${progress}%`}</Typography>
          </Box>
        </Box>
      )}

      <div className="d-flex py-4 flex-wrap">
        <label htmlFor="btn-upload">
          <input
            id="btn-upload"
            name="btn-upload"
            style={{ display: "none" }}
            type="file"
            // onChange={uploadOnChange}
            onChange={selectFile}
          />
          <Button
            className="btn-choose mr-4"
            variant="outlined"
            component="span"
          >
            Choose Files
          </Button>
        </label>
        <div className="file-name">
          {selectedFiles && selectedFiles.length > 0
            ? selectedFiles[0].name
            : null}
        </div>
        {/* <Button
          className="btn-upload p-2"
          style={
            selectedFiles
              ? {
                  color: "white",
                  backgroundColor: "#0e9146",
                  height: "30px",
                  width: "70px",
                  alignSelf: "center",
                }
              : {}
          }
          component="span"
          disabled={!selectedFiles}
          onClick={upload}
        >
          Upload
        </Button> */}
      </div>

      <Typography
        variant="subtitle2"
        className={`upload-message ${isError ? "error" : ""}`}
      >
        {message}
      </Typography>

      {/* <Typography variant="h6" className="list-header">
        List of Files
      </Typography> */}
      <ul className="list-group">
        {fileInfos &&
          fileInfos.map((file, index) => (
            <ListItem divider key={index}>
              <a href={file.url}>{file.name}</a>
            </ListItem>
          ))}
      </ul>
    </div>
  );
};
