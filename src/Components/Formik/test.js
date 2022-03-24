import React from "react";
import { useFormik } from "formik";

const SignUpForm = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) errors.firstName = "First Name Required";
    else if (values.firstName.length > 15)
      errors.firstName = "First Name should be less than and equal to 15";

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        ></input>
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default SignUpForm;
