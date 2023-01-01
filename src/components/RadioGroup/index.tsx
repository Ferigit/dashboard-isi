import Radio from "@mui/material/Radio";
import { RadioGroup as MUIRadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField as MTextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
}));

const RadioGroup = (props: any) => {
  const styles = useStyles();
  const { name, label, placeholder } = props;

  const CustomInput = ({ field, form, ...props }: any) => {
    return (
      <MUIRadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        {...field}
        {...props}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </div>
      </MUIRadioGroup>
    );
  };

  return (
    <div className={styles.container}>
      <Field name={name} id={name} component={CustomInput} />
      <ErrorMessage
        name={props.name}
        render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
      />
    </div>
  );
};

export default RadioGroup;
