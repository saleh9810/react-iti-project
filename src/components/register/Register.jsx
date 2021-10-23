import React from "react";
import { Formik, Form, } from "formik";
import FormArray from "./FormArray";
import * as Yup from "yup";
import RegisterField from "./RegisterField";
import { SelectField } from "./SelectField";

const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    active: false,
    gender: "",
    hoppies: [''],
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Enter a valid emil").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    gender: Yup.string().required("Required"),
    active: Yup.boolean().required(),
  });

  const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));



  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
     {(formik) => {

         return (

<Form className="container">
    <h2 className="text-center mt-4">Register Form</h2>
<RegisterField
  label="Enter user name"
  name="name"
  type="text"
  className="form-control mb-3"
/>
<RegisterField
  label="Email"
  name="email"
  type="email"
  className="form-control mb-3"

/>
<RegisterField
  label="Password"
  name="password"
  type="password"
  className="form-control mb-3"

/>
<RegisterField
  label="confirm Password"
  name="confirmPassword"
  type="password"
  className="form-control mb-3"

/>

<SelectField 

  name="gender"
  label="gender"
  className="form-select"
  options={["","male", "female"]}
/>

<RegisterField
  label="Active"
  name="active"
  type="checkbox"
  className="mt-3 mb-3"
  
/>

<FormArray
 name ="hoppies"
 values={formik.values.hoppies}
 value="hoppy"
/>




<button type="submit" className="btn btn-primary mt-3 mb-4  d-block">submit</button>
</Form>

         );}}
    </Formik>
  );
};

export default Register;
