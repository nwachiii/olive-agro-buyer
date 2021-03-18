import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import axios from "axios";

function getModalStyle() {
  return {
    width: "40vw",
    maxWidth: "100vw",
    maxHeight: "100%",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflowY: "auto",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    width: 400,
    height: 250,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid lightgray",
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
}));

function EditProduct({ category }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteCategory = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios.patch(
        `https://www.api.oliveagro.org/api/category/${category._id}`,
        config
      );
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h3 id="simple-modal-title">Edit Category</h3>
      <form className="d-flex p-3 flex-wrap direction-column mb-3">
        <input
          type="text"
          defaultValue={category.name}
          name="category name"
          style={{
            padding: "0.5em 7px",
            borderRadius: "10px",
            border: "1px solid lightgray",
            margin: "0 auto",
          }}
        />
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={handleDeleteCategory}
          style={{
            color: "white",
            backgroundColor: "#0e9146",
            width: "100px",
          }}
        >
          Save
        </button>
        <button
          onClick={handleClose}
          style={{
            color: "white",
            backgroundColor: "red",
            width: "100px",
            marginLeft: "1em",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <button
        type="button"
        onClick={handleOpen}
        style={{
          color: "white",
          backgroundColor: "#0e9146",
          width: "100px",
        }}
      >
        Edit
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default EditProduct;
