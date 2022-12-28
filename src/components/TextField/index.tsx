// import React from "react";
// import {
//   Formik,
//   Form as FormikForm,
//   Field,
//   ErrorMessage,
//   useFormikContext,
//   useField,
//   useFormik,
// } from "formik";
// import { TextField as MTextField } from "@mui/material";
import { InputAdornment, Popover, Typography } from "@mui/material";
// import cs from "classnames";
// import useTextFieldStyle from "./useTextField.style";
// import classNames from "classnames";

// const TextField = (props: any) => {
//   const {
//     name,
//     label,
//     placeholder,
//     className,
//     required,
//     disabled,
//     type = "text",
//     ...rest
//   } = props;
//   const classes = useTextFieldStyle();
//   const CustomInput = ({ field, form, ...props }: any) => {
//     return (
//       <MTextField
//         placeholder={placeholder}
//         label={label}
//         // className={cs(className, classes.root)}
//         className={classes.textField}
//         // classes={{
//         //   ...classes,
//         //   inputRoot: classNames(classes.inputRoot, classes.root),
//         //   input: classNames(classes?.input),
//         // }}
//         InputProps={{
//           // style: {
//           //   fontSize: 14,
//           //   height: 45,
//           //   borderRadius: 12,
//           //   background: "#fff",
//           //   width: "100% !important",
//           //   border: "1px solid red",
//           // },
//           className: classes.input,
//           endAdornment: props?.endAdornment ? (
//             <InputAdornment position="start">
//               {props?.endAdornment}
//             </InputAdornment>
//           ) : (
//             ""
//           ),
//         }}
//         {...field}
//         {...props}
//         style={{ width: "100% !important" }}
//       />
//     );
//   };
//   const formikContext = useFormikContext();

//   return (
//     <>
//       {formikContext ? (
//         <>
//           <Field
//             name={name}
//             id={name}
//             component={CustomInput}
//             type={props.type}
//           />
//           <ErrorMessage
//             name={name}
//             render={(msg: any) => <div style={{ color: "red" }}>{msg}</div>}
//           />
//         </>
//       ) : (
//         <MTextField
//           placeholder={placeholder}
//           label={label}
//           value={props?.value}
//           onChange={props.onChange}
//           className={cs(className)}
//           required={required}
//           disabled={disabled}
//           type={type}
//           InputProps={{
//             style: {
//               fontSize: 14,
//               height: 45,
//               borderRadius: 12,
//               background: "#fff",
//             },
//             endAdornment: props?.endAdornment ? (
//               <InputAdornment position="start">
//                 {props?.endAdornment}
//               </InputAdornment>
//             ) : (
//               ""
//             ),
//           }}
//         />
//       )}
//     </>
//   );
// };
// export default TextField;
import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField as MTextField } from "@mui/material";
// import { useStyles } from "./styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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
