import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import makeStyles from "../../theme/helpers";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Field, ErrorMessage } from "formik";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: 2,
  },
  width: "100% !important",

  "& .MuiInputBase-root": {
    height: "35px !important",
    // marginTop: 8,
    width: "100% !important",
    "& div": {
      display: "flex !important",
      justifyContent: "center !important",
      alignItems: "center !important",
    },
  },
  "& .MuiInputBase-input": {
    height: "35px !important",
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    position: "relative",
    borderRadius: 12,
    // backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    // fontSize: 16,
    // height: 35,
    // padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    "&:focus": {
      borderRadius: 12,
      // borderColor: '#80bdff',
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
}));

const DropDown = (props: any) => {
  const styles = useStyles();
  const { name, label, placeholder, options } = props;

  const CustomInput = ({ field, form, ...props }: any) => {
    return (
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
        input={<BootstrapInput />}
        {...field}
        {...props}
        placeholder={placeholder}
      >
        {options.map((option: any) => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
    );
  };

  return (
    <div className={styles.container}>
      <Field name={name} id={name} component={CustomInput} type={props.type} />
      <ErrorMessage
        name={props.name}
        render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
      />
    </div>
  );
};

export default DropDown;
