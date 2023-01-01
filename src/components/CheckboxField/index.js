import { Checkbox } from "@mui/material"
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

const CheckboxField = (props: any) => {
    const styles = useStyles();
    const { name, label, placeholder } = props;

    const CustomInput = ({ field, form, ...props }: any) => {
        return (

            <Checkbox
                label="label"
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