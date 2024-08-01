import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { toast } from "react-toastify";
import base_url from "../../API/bootapi";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, "Employee name must be at least 4 characters long")
    .required("Field should not be empty"),
  designation: Yup.string().required("Designation should not be Empty"),
  mobileNo: Yup.string()
    .matches(/^\d{10}$/, "Phone Number is Not Correct")
    .required("Field should not be empty"),
  dob: Yup.date().required("Field should not be empty"),
  city: Yup.string().required("Field should not be empty"),
});

const AddEmployee = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios
      .post(`${base_url}/employees`, values)
      .then((response) => {
        toast.success("Employee added successfully");
        setSubmitting(false);
        resetForm();
      })
      .catch((error) => {
        toast.error("Failed to add employee");
        console.error("Error:", error.response || error.message);
        setSubmitting(false);
      });
  };

  const formStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  };

  const formGroupStyle = {
    marginBottom: "15px",
  };

  const labelStyle = {
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <Formik
      initialValues={{
        name: "",
        designation: "",
        mobileNo: "",
        dob: "",
        city: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form style={formStyle}>
          <FormGroup style={formGroupStyle}>
            <Label for="name" style={labelStyle}>
              Employee Name
            </Label>
            <Field
              as={Input}
              type="text"
              id="name"
              name="name"
              style={inputStyle}
            />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </FormGroup>

          <FormGroup style={formGroupStyle}>
            <Label for="designation" style={labelStyle}>
              Employee Designation
            </Label>
            <Field
              as={Input}
              type="text"
              id="designation"
              name="designation"
              style={inputStyle}
            />
            <ErrorMessage
              name="designation"
              component="div"
              className="text-danger"
            />
          </FormGroup>

          <FormGroup style={formGroupStyle}>
            <Label for="mobileNo" style={labelStyle}>
              Employee Mobile Number
            </Label>
            <Field
              as={Input}
              type="text"
              id="mobileNo"
              name="mobileNo"
              style={inputStyle}
            />
            <ErrorMessage
              name="mobileNo"
              component="div"
              className="text-danger"
            />
          </FormGroup>

          <FormGroup style={formGroupStyle}>
            <Label for="dob" style={labelStyle}>
              Employee Date of Birth
            </Label>
            <Field
              as={Input}
              type="date"
              id="dob"
              name="dob"
              style={inputStyle}
            />
            <ErrorMessage name="dob" component="div" className="text-danger" />
          </FormGroup>

          <FormGroup style={formGroupStyle}>
            <Label for="city" style={labelStyle}>
              Employee City
            </Label>
            <Field
              as={Input}
              type="text"
              id="city"
              name="city"
              style={inputStyle}
            />
            <ErrorMessage name="city" component="div" className="text-danger" />
          </FormGroup>

          <Button type="submit" style={buttonStyle} disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add Employee"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddEmployee;
