import React from "react";
import { useFormik } from "formik";
const Form = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Firstname length should less than and equal to 15";
    }

    if (!values.lastName) errors.lastName = "Required";
    else if (values.lastName.length > 15)
      errors.lastName = "LastName length should be less than 15";
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(formik.values, null, 2));
      console.log(formik.values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <lable for="#firstName">First Name</lable>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
        <label for="#lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
