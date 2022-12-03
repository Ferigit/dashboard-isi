import * as React from "react";
import { Button as MButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import useStyles from "./useButton.style";

export default function Button({ title, icon }: any) {
  const classes = useStyles();
  return (
    <MButton variant="outlined" startIcon={icon} className={classes.container}>
      {title}
    </MButton>
  );
}
