// import React, { useState } from 'react';
// import firebase from 'firebase';
// import { Button } from '@material-ui/core';
// import { storage, db } from './firebase';
// import './ImageUpload.css';

// function ImageUpload(username) {
//   const [image, setImage] = useState(null);
//   const [progress, setProgress] = useState(0);
//   const [caption, setCaption] = useState('');

//   const handleChange = e => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const handleUpload = () => {
//     const uploadTask = storage.ref(`images/${image.name}`).put(image);
//     uploadTask.on(
//       'state_changed',
//       snapshot => {
//         // progress indicator function...
//         const progress = Math.round(
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         );
//         setProgress(progress);
//       },
//       error => {
//         // Error function
//         console.log(error);
//         alert(error.message);
//       },
//       () => {
//         // complete function
//         storage
//           .ref('images')
//           .child(image.name)
//           .getDownloadURL() //get the download link of image uploaded
//           .then(url => {
//             // post image inside db automatically
//             db.collection('posts').add({
//               // eslint-disable-next-line no-undef
//               timestamp: firebase.firestore.FieldValue.serverTimestamp,
//               caption: caption,
//               imageUrl: url,
//               username: username
//             });

//             setProgress(0);
//             setCaption('');
//             setImage(null);
//           });
//       }
//     );
//   };

//   return (
//     <div className="image-upload">
//       <progress className="image-upload__progress" value={progress} max="100" />
//       <input
//         type="text"
//         placeholder="Enter a caption..."
//         onChange={event => setCaption()}
//         value={caption}
//       />
//       <input type="file" onChange={handleChange} />
//       <Button onClick={handleUpload}>Upload</Button>
//     </div>
//   );
// }

// export default ImageUpload;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: 'none'
  }
}));

export default function UploadButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="info" component="span" size="xl">
          Upload
        </Button>
      </label>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
      />
      <label htmlFor="icon-button-file">
        <IconButton color="info" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}
