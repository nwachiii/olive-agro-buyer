import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  margin: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textColor: {
    color: "#0e9146",
    textAlign: "center",
    margin: theme.spacing(2),
  },
  uploadBtnStyle: {
    color: "#000",
    backgroundColor: "lightgray",
    width: "100%",
    fontWeight: 800,
    "&:hover": {
      color: "white",
      backgroundColor: "#0e9146",
      transform: "scale(0.8)",
      transitionDuration: "1.5s",
    },
    padding: "1em 6px",
    margin: "3px auto",
  },
}));
