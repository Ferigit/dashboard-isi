import { InputAdornment, Popover, Typography } from "@mui/material";
import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField as MTextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CloseRounded } from "@mui/icons-material";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  closeIcon: {
    cursor: "pointer",
  },
}));

const TextField = (props: any) => {
  const styles = useStyles();
  const { name, label, placeholder } = props;

  const CustomInput = ({ field, form, ...props }: any) => {
    return (
      <MTextField
        placeholder={placeholder}
        label={label}
        InputProps={{
          style: {
            fontSize: 14,
            height: 45,
            borderRadius: 12,
            background: "#fff",
          },
          endAdornment: props?.endAdornment ? (
            <InputAdornment position="start">
              {props?.endAdornment}
            </InputAdornment>
          ) : field.value ? (
            <span
              className={styles.closeIcon}
              // onClick={() => {
              //   // field?.onChange(null);
              //   // form?.setFieldValue(field?.name, null);
              //   form?.setFieldValue(field?.name, null);
              // }}
            >
              {/* <CloseRounded /> */}
            </span>
          ) : (
            ""
          ),
        }}
        {...field}
        {...props}
      />
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

export default TextField;
