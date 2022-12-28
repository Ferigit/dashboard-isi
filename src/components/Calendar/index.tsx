// import * as React from "react";
// import dayjs, { Dayjs } from "dayjs";
// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

// export default function Calendar(props: any) {
//   const [value, setValue] = React.useState<Dayjs | null>(
//     dayjs("2014-08-18T21:11:54")
//   );

//   const handleChange = (newValue: Dayjs | null) => {
//     setValue(newValue);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Stack spacing={3}>
//         {/* <DesktopDatePicker
//           label="Date desktop"
//           inputFormat="MM/DD/YYYY"
//           value={value}
//           onChange={handleChange}
//           renderInput={(params: any) => <TextField {...params} />}
//         /> */}
//         <DateTimePicker
//           label="Date&Time picker"
//           value={value}
//           onChange={handleChange}
//           renderInput={(params: any) => <TextField {...params} />}
//         />
//         <TimePicker
//           label="Time"
//           value={value}
//           onChange={handleChange}
//           renderInput={(params: any) => <TextField {...params} />}
//         />
//       </Stack>
//     </LocalizationProvider>
//   );
// }
import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterJalali from "@date-io/date-fns-jalali";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useFormikContext, Formik, Form, Field } from "formik";

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

// export default function Calendar() {
export default function Calendar(props: any) {
  const [value, setValue] = React.useState<Date | null>(new Date(2022, 3, 7));
  const classes = styles(null);
  // const { values, submitForm, setValues } = useFormikContext();

  return (
    <LocalizationProvider dateAdapter={AdapterJalali}>
      <DatePicker
        mask="____/__/__"
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
          // setValues(props.name, newValue);
        }}
        renderInput={(params) => (
          <TextField
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
          />
        )}
      />
    </LocalizationProvider>
  );
}
