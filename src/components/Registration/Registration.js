import React, { useRef } from "react";
import "./Registration.css";
import { Formik } from "formik";
import PreviewImage from "./PreviewImage";
import * as yup from "yup";
import CustomErrorMsg from "./CustomErrorMsg";
//

function Registration() {
  const fileRef = useRef(null);
  const validationSchema = yup.object({
    name: yup.string().required("name is required"),
    email: yup
      .string()
      .matches(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        "Invalid email address"
      )
      .required("email is required"),
    password: yup
      .string()
      .required("please enter password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password"), null], "Password doesn't match."),
  });
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "", name: "", confirmPassword: "", file: null }}
        validationSchema={validationSchema}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = "Required";
        //   }
        //   if (!values.password) {
        //     errors.password = "Required";
        //   }
        //   if (!values.name) {
        //     errors.name = "Required";
        //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        //     errors.email = "Invalid email address";
        //   } else if (values.password.length < 4) {
        //     errors.password = "please enter 4 characters password";
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            console.log(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="registration-form">
            <h2>Registration Form</h2>
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
            <CustomErrorMsg name="name" />
            {/* {errors.name && touched.name && errors.name} */}
            <br></br>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
            <CustomErrorMsg name="email" />
            {/* {errors.email && touched.email && errors.email} */}
            <br></br>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
            <CustomErrorMsg name="password" />
            {/* {errors.password && touched.password && errors.password} */}
            <br></br>
            <label htmlFor="password">Confirm Password</label>
            <input type="password" name="confirmPassword" onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} />
            <CustomErrorMsg name="confirmPassword" />
            {/* {errors.password && touched.password && errors.password} */}
            <br></br>
            <input
              type="file"
              hidden
              ref={fileRef}
              onChange={(events) => {
                setFieldValue("file", events.target.files[0]);
              }}
            />
            {values.file && <PreviewImage file={values.file} />}
            <button
              className="upload-img"
              onClick={() => {
                fileRef.current.click();
              }}
            >
              Upload Image
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Registration;
