// import React from 'react';
// import {
//     Formik,
//     Form as FormikForm,
//     Field,
//     ErrorMessage,
//     useFormikContext,
//     useField,
//     useFormik
// } from 'formik';
import { Checkbox } from "@mui/material"
// import useCheckBoxStyle from './useCheckBox.style'
// import cs from 'classnames'

// const CheckboxField = (props) => {
//     const classes = useCheckBoxStyle()
//     const { name, checked, onChange, label, placeholder, ...rest } = props
//     return (
//         <span>
//             <Checkbox name={name} label={"label"} checked={checked} onChange={onChange} />
//             {label && <label htmlFor={name} className={cs('pt-sm', classes.label)}>{label}</label>}
//         </span>
//     )
// }
// export default CheckboxField
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

const CheckboxField = (props: any) => {
    const styles = useStyles();
    const { name, label, placeholder } = props;

    const CustomInput = ({ field, form, ...props }: any) => {
        // const { name, checked, onChange, label, placeholder, ...rest } = props
        console.log("checkbox : ", field, props)
        return (

            <Checkbox
                // name={name} 
                label="label"
                // checked={checked}
                // onChange={onChange}
                {...field}
                {...props}
            />
        );
    };

    return (
        <div className={styles.container}>
            <Field name={name} id={name} type={props.type} />
            <label>{label}</label>

            <ErrorMessage
                name={props.name}
                render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
            />
        </div>
    );
};

export default CheckboxField;