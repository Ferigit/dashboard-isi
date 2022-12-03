import React from "react";
import {
  Formik,
  Form as FormikForm,
  Field,
  ErrorMessage,
  useFormikContext,
  useField,
  useFormik,
} from "formik";
import { TextField as MTextField } from "@mui/material";
import { InputAdornment, Popover, Typography } from "@mui/material";
import cs from "classnames";
import useTextFieldStyle from "./useNumberField.style";

const NumberField = (props: any) => {
  const {
    name,
    label,
    placeholder,
    className,
    required,
    disabled,
    type = "text",
    ...rest
  } = props;
  const classes = useTextFieldStyle();
  const CustomInput = ({ field, form, ...props }: any) => {
    return (
      <MTextField
        placeholder={placeholder}
        label={label}
        {...field}
        {...props}
      />
    );
  };
  const formikContext = useFormikContext();

  return (
    <>
      {formikContext ? (
        <>
          <Field
            name={name}
            id={name}
            component={CustomInput}
            type={props.type}
          />
          <ErrorMessage
            name={name}
            render={(msg: any) => <div style={{ color: "red" }}>{msg}</div>}
          />
        </>
      ) : (
        <MTextField
          placeholder={placeholder}
          label={label}
          value={props?.value}
          onChange={props.onChange}
          className={cs(className)}
          required={required}
          disabled={disabled}
          type={"number"}
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
            ) : (
              ""
            ),
          }}
        />
      )}
    </>
  );
};
export default NumberField;
