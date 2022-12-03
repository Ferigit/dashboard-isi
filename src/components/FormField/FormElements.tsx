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

// export function Form(props: any) {
//   return (
//     <Formik {...props}>
//       <FormikForm className="needs-validation" noValidate={false}>
//         {props.children}
//       </FormikForm>
//     </Formik>
//   );
// }

// export function SubmitButton(props: any) {
//   const { title, ...rest } = props;
//   const { isSubmitting } = useFormikContext();

//   return (
//     <button type="submit" {...rest} disabled={isSubmitting}>
//       {title}
//     </button>
//   );
// }
import React from "react";
import { Formik, Form as FormikForm, useFormikContext } from "formik";

export function Form(props: any) {
  return (
    <Formik {...props}>
      <FormikForm className="needs-validation">{props.children}</FormikForm>
    </Formik>
  );
}

export function SubmitButton(props: any) {
  const { title, ...rest } = props;
  const { isSubmitting } = useFormikContext();

  return (
    <button type="submit" {...rest} disabled={isSubmitting}>
      {title}
    </button>
  );
}
