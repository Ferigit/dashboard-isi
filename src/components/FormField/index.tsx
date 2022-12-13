import React, { useState, useEffect, Fragment } from "react";
import { Form as CForm, SubmitButton } from "./FormElements";
import { TextField, AutoCompleteField, NumberField } from "../../components";
import DropDown from "../AutoCompleteField";
import { useStyles } from "./styles";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "none",
}));

function Form({ formData: formJsonSchema, onFormSubmit }: any) {
  const styles = useStyles();
  const formSchema =
    formJsonSchema?.form?.fields?.reduce(
      (acc: any, curr: any) => ({ ...acc, [curr.name]: curr }),
      {}
    ) ?? {};
  const [formData, setFormData] = useState({});
  const [validationSchema, setValidationSchema] = useState({});

  useEffect(() => {
    initForm(formSchema);
  }, []);

  const initForm = (formSchema: any) => {
    let _formData: any = {};
    let _validationSchema: any = {};

    for (let key of Object.keys(formSchema)) {
      _formData[key] = "";

      if (formSchema[key].type === "text") {
        _validationSchema[key] = Yup.string();
      } else if (formSchema[key].type === "email") {
        _validationSchema[key] = Yup.string().email();
      } else if (formSchema[key].type === "select") {
        _validationSchema[key] = Yup.string().oneOf(
          formSchema[key].options.map((o: any) => o.value)
        );
      }

      if (formSchema[key].required) {
        _validationSchema[key] = _validationSchema[key].required("Required");
      }
    }

    setFormData(_formData);
    setValidationSchema(Yup.object().shape({ ..._validationSchema }));
  };

  const getFormElement = (elementName: string, elementSchema: any) => {
    const props = {
      name: elementName,
      label: elementSchema?.label ?? elementSchema?.name,
      options: elementSchema?.options,
      type: elementSchema?.type,
      placeholder: elementSchema.placeholder,
      selectOptionsSource: elementSchema?.selectOptionsSource,
    };

    if (
      elementSchema.type === "text" ||
      elementSchema.type === "email" ||
      elementSchema.type === "password" ||
      elementSchema.type === "number"
    ) {
      return <TextField {...props} />;
    }

    if (elementSchema.type === "dropdown") {
      return <AutoCompleteField {...props} />;
    }
  };

  const onSubmit = async (
    values: object,
    { setSubmitting, resetForm, setStatus }: any
  ) => {
    setSubmitting(true);
    await onFormSubmit(values);
    setSubmitting(false);
  };

  return (
    <div className="App">
      <p className={styles.title}>{formJsonSchema?.name ?? ""}</p>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {formJsonSchema?.form?.fields?.map((field: any) => {
            return (
              <Grid item {...field.grid}>
                {getFormElement(field.name, field)}
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default Form;
