import React, { useState, useEffect } from "react";
import AdapterJalali from "@date-io/date-fns-jalali";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useFormikContext, Formik, Form, Field, ErrorMessage } from "formik";
import { TextField as MTextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CloseRounded } from "@mui/icons-material";
const styles = (theme: any) => ({
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: "white",
  },
});

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    position: "relative",
  },
  closeIcon: {
    position: "absolute",
    left: 34,
    top: 10,
    cursor: "pointer",
  },
}));

const TextField = (props: any) => {
  const styles = useStyles();
  const { name, label, placeholder } = props;

  const CustomInput = ({ field, form, ...props }: any) => {
    return (
      <LocalizationProvider dateAdapter={AdapterJalali}>
        <DatePicker
          mask="____/__/__"
          value={form?.values?.[field?.name]}
          onChange={(newValue: any) => {
            form?.setFieldValue(field?.name, newValue);
          }}
          renderInput={(params) => (
            <MTextField
              InputProps={{
                style: {
                  fontSize: 14,
                  height: 45,
                  borderRadius: 12,
                  background: "#fff",
                },
              }}
              {...params}
            />
          )}
        />
        {!!form?.values?.[field?.name] ? (
          <span
            className={styles.closeIcon}
            onClick={() => {
              form?.setFieldValue(field?.name, null);
            }}
          >
            <CloseRounded />
          </span>
        ) : null}
      </LocalizationProvider>
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
