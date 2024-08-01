// src/Components/Home.js
import React from "react";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <h1 className="my-3 text-center">
        Welcome to Employee Management System
      </h1>
      <Card className="my-3">
        <CardBody>
          <CardTitle tag="h5">Employee Management</CardTitle>
          <CardText>
            This application helps you manage employee details efficiently.
          </CardText>
          <Link to="/add-employee">
            <Button color="primary">Add New Employee</Button>
          </Link>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Home;
