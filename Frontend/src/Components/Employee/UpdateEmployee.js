import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import base_url from "../../API/bootapi";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

function UpdateEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    designation: "",
    mobileNo: "",
    dob: "",
    city: "",
  });

  useEffect(() => {
    axios.get(`${base_url}/employees?id=${id}`).then(
      (response) => {
        setEmployee(response.data[0]);
      },
      (error) => {
        toast.error("Failed to load employee details");
        console.error("Error:", error);
      }
    );
  }, [id]);

  const handleForm = (e) => {
    e.preventDefault();
    putDataToServer(employee);
  };

  const putDataToServer = (data) => {
    axios.put(`${base_url}/employees?id=${id}`, data).then(
      (response) => {
        toast.success("Employee updated successfully");
        navigate("/employee-list");
      },
      (error) => {
        toast.error("Something went wrong");
        console.error("Error:", error);
      }
    );
  };

  return (
    <Container>
      <h1 className="text-center my-3">Update Employee</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label for="name">Employee Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter here"
            type="text"
            value={employee.name}
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="designation">Employee Designation</Label>
          <Input
            id="designation"
            name="designation"
            placeholder="Enter designation here"
            type="text"
            value={employee.designation}
            onChange={(e) =>
              setEmployee({ ...employee, designation: e.target.value })
            }
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="mobileNo">Employee Mobile Number</Label>
          <Input
            id="mobileNo"
            name="mobileNo"
            placeholder="Enter mobile number here"
            type="text"
            value={employee.mobileNo}
            onChange={(e) =>
              setEmployee({ ...employee, mobileNo: e.target.value })
            }
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="dob">Employee Date of Birth</Label>
          <Input
            id="dob"
            name="dob"
            placeholder="Enter date of birth here"
            type="date"
            value={employee.dob}
            onChange={(e) => setEmployee({ ...employee, dob: e.target.value })}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">Employee City</Label>
          <Input
            id="city"
            name="city"
            placeholder="Enter city here"
            type="text"
            value={employee.city}
            onChange={(e) => setEmployee({ ...employee, city: e.target.value })}
            required
          />
        </FormGroup>
        <Button type="submit" color="warning">
          Update Employee
        </Button>
      </Form>
    </Container>
  );
}

export default UpdateEmployee;
