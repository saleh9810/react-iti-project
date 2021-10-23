import { Field } from "formik";
import { ErrorMessage } from "formik";

export const SelectField = ({name, className, label, options,}) => {
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
                   {options.map(optipn => {
                      return  <option key={optipn} value={optipn}>{optipn}</option>
                   })}
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