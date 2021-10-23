import { Field } from "formik";
import { ErrorMessage } from "formik";

export const SelectField = ({name, className, label, option1, option2,}) => {
    return (
        <Field name={name}>
          {(formikField) => {
            return (
              <>
              <label className="mx-1" htmlFor={name}>{label}</label>
                <select
                  id={name}
                  className={className}
                  {...formikField.field}
                  defaultChecked={formikField.field.value}  
                >
                   <option value=""></option>
                  <option value={option1}>{option1}</option>
                  <option value={option2}>{option2}</option>
                    </select>
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