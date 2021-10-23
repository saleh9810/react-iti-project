import { Field } from "formik";
import { ErrorMessage } from "formik";


 export default function RegisterField({ name, type, label, className}){
  return (
    <Field name={name}>
      {(formikField) => {
        return (
          <>
          <label className="mx-1" htmlFor={name}>{label}</label>
            <input
              type={type}
              id={name}
              placeholder={label}
              className={className}
              {...formikField.field}
              defaultChecked={formikField.field.value}
              
            />
             <ErrorMessage name={name}>
      {(errMessage) => {
        return <div className="alert alert-danger">{errMessage}</div>;
      }}
    </ErrorMessage>
          </>
        );
      }}
    </Field>
  );
};