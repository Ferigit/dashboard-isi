import * as React from "react";
// import TextField from "@mui/material/TextField";
import AdapterJalali from "@date-io/date-fns-jalali";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useFormikContext, Formik, Form, Field, ErrorMessage } from "formik";
import { TextField as MTextField } from "@mui/material";
// import { useStyles } from "./styles";
import { makeStyles } from "@mui/styles";

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

// export default function Calendar(props: any) {
//   const [value, setValue] = React.useState<Date | null>(new Date(2022, 3, 7));
//   const classes = styles(null);
//   // const { values, submitForm, setValues } = useFormikContext();

//   return (
//     <LocalizationProvider dateAdapter={AdapterJalali}>
//       <DatePicker
//         mask="____/__/__"
//         value={value}
//         onChange={(newValue: any) => {
//           setValue(newValue);
//           // setValues(props.name, newValue);
//         }}
//         renderInput={(params) => (
//           <TextField
//             // className={classes.textField}
//             // InputProps={{
//             //   className: classes.input,
//             // }}
//             InputProps={{
//               style: {
//                 fontSize: 14,
//                 height: 45,
//                 borderRadius: 12,
//                 background: "#fff",
//               },
//             }}
//             {...params}
//           />
//         )}
//       />
//     </LocalizationProvider>
//   );
// }

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
  // const [localvalue, set]
  const CustomInput = ({ field, form, ...props }: any) => {
    console.log("field, form: ", field, form);
    return (
      <LocalizationProvider dateAdapter={AdapterJalali}>
        <DatePicker
          mask="____/__/__"
          value={form?.values?.[field?.name]} //value}
          onChange={(newValue: any) => {
            console.log("calendar: ", newValue);
            // form?.onChange(newValue);
            form?.setFieldValue(field?.name, newValue);

            // form?.
            // setValue(newValue);
            // setValues(props.name, newValue);
          }}
          // value={form?.value}
          // onChange={form?.onChange}
          renderInput={(params) => (
            <MTextField
              // className={classes.textField}
              // InputProps={{
              //   className: classes.input,
              // }}
              InputProps={{
                style: {
                  fontSize: 14,
                  height: 45,
                  borderRadius: 12,
                  background: "#fff",
                },
              }}
              {...params}
              // {...field}
              // {...props}
            />
          )}
        />
      </LocalizationProvider>
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

export default TextField;
