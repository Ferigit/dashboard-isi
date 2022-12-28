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

// const useStyles = makeStyles({
//   root: { borderRadius: "12px !important" },
//   select: {
//     border: "1px solid red !important",
//     "& ul": {
//       //   backgroundColor: "#cccccc",
//     },
//     "& li": {
//       fontSize: 12,
//     },
//   },
// });

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

// interface IProps {
//   options?: any;
//   label: string;
//   placeholder?: string;
// }
// export default function DropDown(props: IProps) {
//   const classes = useStyles();

//   const { options, label, placeholder } = props;
//   const [age, setAge] = React.useState("");
//   console.log("dropdown props: ", props);
//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value as string);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">{label}</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           placeholder={placeholder}
//           onChange={handleChange}
//           //   MenuProps={{ classes: { root: classes.root, paper: classes.select } }}
//           input={<BootstrapInput />}
//         >
//           {options.map((option: any) => (
//             <MenuItem value={option.value}>{option.label}</MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }
// import { TextField as MTextField } from "@mui/material";
// import { useStyles } from "./styles";
// import { makeStyles } from "@mui/styles";

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
  //   const { options, label, placeholder } = props;

  const CustomInput = ({ field, form, ...props }: any) => {
    return (
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={age}
        label="Age"
        // onChange={handleChange}
        //   MenuProps={{ classes: { root: classes.root, paper: classes.select } }}
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

export default DropDown;
