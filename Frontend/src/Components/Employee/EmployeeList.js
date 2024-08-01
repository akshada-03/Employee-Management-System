import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  ListGroup,
  ListGroupItem,
  Button,
  Container,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import base_url from "../../API/bootapi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./EmployeeList.css";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const getAllEmployees = useCallback(() => {
    axios.get(`${base_url}/employees`).then(
      (response) => {
        setEmployees(response.data);
        toast.success("Employees loaded successfully");
      },
      (error) => {
        toast.error("Something went wrong");
        console.error("Error:", error);
      }
    );
  }, []);

  useEffect(() => {
    getAllEmployees();
  }, [getAllEmployees]);

  const deleteEmployee = (id) => {
    axios.delete(`${base_url}/employees?id=${id}`).then(
      (response) => {
        toast.success("Employee deleted successfully");
        getAllEmployees();
      },
      (error) => {
        toast.error("Something went wrong");
        console.error("Error:", error);
      }
    );
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Container>
      <h1 className="my-3">Employee List</h1>
      <Input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-3"
      />
      <ListGroup>
        {paginatedEmployees.map((employee) => (
          <ListGroupItem key={employee.empId}>
            <div className="employee-details">
              <strong>Name:</strong> {employee.name}
              <div>
                <strong>Designation:</strong> {employee.designation}
              </div>
              <div>
                <strong>Mobile:</strong> {employee.mobileNo}
              </div>
              <div>
                <strong>Date of Birth:</strong> {employee.dob}
              </div>
              <div>
                <strong>City:</strong> {employee.city}
              </div>
            </div>
            <div className="employee-actions">
              <Button
                color="danger"
                onClick={() => deleteEmployee(employee.empId)}
              >
                Delete
              </Button>
              <Button
                color="warning"
                onClick={() => navigate(`/update-employee/${employee.empId}`)}
              >
                Update
              </Button>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
      <Pagination>
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink
            previous
            onClick={() => setCurrentPage(currentPage - 1)}
          />
        </PaginationItem>
        <PaginationItem
          disabled={
            currentPage === Math.ceil(filteredEmployees.length / itemsPerPage)
          }
        >
          <PaginationLink
            next
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </PaginationItem>
      </Pagination>
    </Container>
  );
}

export default EmployeeList;
