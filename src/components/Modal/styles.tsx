import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "unset",

    "& .MuiDialog-paper": {
      maxWidth: "unset",
    },
  },

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    "& .MuiInputBase-root": {
      // maxWidth: 200,
      // minWidth: 200,
    },
  },
  title: {},
  closeButton: {},
  actions: {},
}));
