import React from "react";
import {
  Container,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const Contact = () => {
  // Inline styles
  const containerStyle = {
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const cardBodyStyle = {
    padding: "20px",
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
    <Container style={containerStyle}>
      <h1 className="text-center my-3">Contact Us</h1>
      <Card style={cardStyle}>
        <CardBody style={cardBodyStyle}>
          <Form>
            <FormGroup style={formGroupStyle}>
              <Label for="name" style={labelStyle}>
                Name
              </Label>
              <Input
                type="text"
                id="name"
                placeholder="Enter your name"
                style={inputStyle}
              />
            </FormGroup>
            <FormGroup style={formGroupStyle}>
              <Label for="email" style={labelStyle}>
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                style={inputStyle}
              />
            </FormGroup>
            <FormGroup style={formGroupStyle}>
              <Label for="message" style={labelStyle}>
                Message
              </Label>
              <Input
                type="textarea"
                id="message"
                placeholder="Enter your message"
                style={inputStyle}
              />
            </FormGroup>
            <Button color="primary" style={buttonStyle}>
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Contact;
