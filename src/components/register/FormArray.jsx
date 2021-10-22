import { Field , FieldArray } from "formik";


export default function FormArray({ values , name, value }) {
    return (
        <FieldArray
        name={name}
        render={arrayHelpers => (
            <div>
                {values && values.length > 0 ? (
                    values.map((item, index) => (
                        
                        <div key={index}>

                            <div className="form-group d-flex justify-content-around my-2 align-items-center">
                                <label className="mx-1">{`${value} ${index + 1}`}</label>
                                <Field name={`${name}.${index}`} className="form-control w-50 flex-grow-1" />
                                <button className="btn btn-primary" type="button" onClick={() => arrayHelpers.push('')}>+</button>
                                <button className="btn btn-danger mx-1" type="button" onClick={() => arrayHelpers.remove(index)} >-</button>
                            </div>
                     
                        </div>
                    ))
                ) : (
                    <button type="button" className="btn btn-success mb-3" onClick={() => arrayHelpers.push('')}>
                        Add a {value}
                    </button>
                )}
            </div>
        )}
    />
)
}

