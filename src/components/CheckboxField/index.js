import React from 'react';
import {
    Formik,
    Form as FormikForm,
    Field,
    ErrorMessage,
    useFormikContext,
    useField,
    useFormik
} from 'formik';
import { Checkbox } from "@mui/material"
import useCheckBoxStyle from './useCheckBox.style'
import cs from 'classnames'

const CheckboxField = (props) => {
    const classes = useCheckBoxStyle()
    const { name, checked, onChange, label, placeholder, ...rest } = props
    return (
        <span>
            <Checkbox name={name} label={"label"} checked={checked} onChange={onChange} />
            {label && <label htmlFor={name} className={cs('pt-sm', classes.label)}>{label}</label>}
        </span>
    )
}
export default CheckboxField