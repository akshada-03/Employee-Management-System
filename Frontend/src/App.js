// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "./Components/Header";
import Home from "./Components/Home";
import AddEmployee from "./Components/Employee/AddEmployee";
import EmployeeList from "./Components/Employee/EmployeeList";
import UpdateEmployee from "./Components/Employee/UpdateEmployee";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="/update-employee/:id" element={<UpdateEmployee />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
