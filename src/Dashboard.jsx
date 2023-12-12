import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons/io5";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Container,
  Navbar,
  NavbarBrand,
  Row,
} from "react-bootstrap";
import { IoMan, IoSchool, IoSchoolOutline, IoSettings } from "react-icons/io5";
import "./Dashboard.css";

export default function Dashboard() {
    const [student, setSutdent] = useState([]);
  return (
    <>
      <Navbar bg="dark" light mb-2>
        <NavbarBrand className="text-white">
          <IoSchoolOutline className="font-size-xxl" />
          <span className="font-size-l ml-3">School Manager Application</span>
        </NavbarBrand>
      </Navbar>
      <Container className="mt-3">
        <Row>
          <Col sm="4">
            <Card body>
              <CardTitle tag="h5">
                <IoMan className="font-size-xl" /> 85 Students
              </CardTitle>
              <CardText>
                With Supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button className="btn">Manage Student</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <CardTitle tag="h5">
                <IoSchool className="font-size-xl" /> 20 Teachers
              </CardTitle>
              <CardText>
                With Supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Manage Student</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <CardTitle tag="h5">
                <IoSettings className="font-size-xl" /> 13 Employees
              </CardTitle>
              <CardText>
                With Supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Manage Student</Button>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        <Row>
          <Col sm="12">
            <Button className="btn">
              <span className="font-size-l">Create New Student</span>
            </Button>
          </Col>
        </Row>
          </Container>
          
          <Container className="mt-4">
              
          </Container>
    </>
  );
}
