import { Autocomplete, Chip, TextField } from "@mui/material";
import classNames from "classnames";
// import { nanoid } from "nanoid";
// import React, { forwardRef } from "react";
import useAutoComplete from "./useAutoComplete.style";
// // import { TextField } from '../../components'
// // import { TextField } from '@mui/material'

// const AutoCompleteField = forwardRef((props: any, ref): any => {
//   const {
//     id,
//     multiple = false,
//     renderInput,
//     renderOption,
//     renderTags,
//     placeholder,
//     className,
//     classes,
//     options,
//     onChange,
//     optionTitle = "label",
//     optionLabel = "label",
//     defaultValue,
//     value = "",
//     fullHeight,
//     groupBy,
//     popupIcon,
//     label,
//     ...rest
//   } = props;

//   const styles = useAutoComplete({ fullHeight });

//   return (
//     <Autocomplete
//       value={value}
//       options={options}
//       classes={{
//         ...classes,
//         inputRoot: classNames(
//           classes?.inputRoot,
//           styles.inputRoot,
//           styles.root
//         ),
//         input: classNames(styles.input, classes?.input),
//       }}
//       onChange={(e, newValue) => {
//         onChange(newValue);
//       }}
//       onInputChange={(e, newValue) => {
//         // onChange(newValue)
//       }}
//       className={classNames(styles.root, className)}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           label={label}
//           // placeholder={placeholder}
//           // fullHeight={fullHeight}
//         />
//       )}
//       freeSolo
//     />
//   );
// });

// AutoCompleteField.displayName = "AutoCompleteField";
// export default AutoCompleteField;
import React from "react";
import { Field, ErrorMessage } from "formik";
// import { TextField as MTextField } from "@mui/material";
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

const AutoCompleteField = (props: any) => {
  const {
    name,
    id,
    multiple = false,
    renderInput,
    renderOption,
    renderTags,
    placeholder,
    className,
    classes,
    options,
    onChange,
    optionTitle = "label",
    optionLabel = "label",
    defaultValue,
    value = "",
    fullHeight,
    groupBy,
    popupIcon,
    label,
    ...rest
  } = props;
  // const styles = useStyles();
  // const { name, label, placeholder } = props;
  const styles = useAutoComplete({ fullHeight });

  const CustomInput = ({ field, form, ...props }: any) => {
    return (
      <Autocomplete
        // value={value}
        options={options}
        // classes={{
        //   ...classes,
        //   inputRoot: classNames(
        //     classes?.inputRoot,
        //     styles.inputRoot,
        //     styles.root
        //   ),
        //   input: classNames(styles.input, classes?.input),
        // }}
        onChange={(e, newValue) => {
          onChange(newValue);
        }}
        onInputChange={(e, newValue) => {
          // onChange(newValue)
        }}
        className={classNames(styles.root, className)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            // placeholder={placeholder}
            // fullHeight={fullHeight}
          />
        )}
        freeSolo
        {...field}
        {...props}
      />
    );
    // return (
    //   <MTextField
    //     placeholder={placeholder}
    //     label={label}
    //     InputProps={{
    //       style: {
    //         fontSize: 14,
    //         height: 45,
    //         borderRadius: 12,
    //         background: "#fff",
    //       },
    //       endAdornment: props?.endAdornment ? (
    //         <InputAdornment position="start">
    //           {props?.endAdornment}
    //         </InputAdornment>
    //       ) : (
    //         ""
    //       ),
    //     }}
    //     {...field}
    //     {...props}
    //   />
    // );
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

export default AutoCompleteField;
