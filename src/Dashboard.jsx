import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons/io5";
import { Button, Card, CardText, CardTitle, Col, Container, Navbar, NavbarBrand, Row } from "react-bootstrap";
import { IoMan, IoSchoolOutline } from "react-icons/io5";

export default function Dashboard() {
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
                  <Col sm='4'>
                      <Card body>
                          <CardTitle tag='h5'>
                              <IoMan className="font-size-xl" /> 85 students
                          </CardTitle>
                          <CardText>
                              With Supporting text below as a natural lead-in to additional content.
                          </CardText>
                          <Button>Manage Student</Button>
                      </Card>
                  </Col>
                  <Col sm='4'></Col>
                  <Col sm='4'></Col>
              </Row>
          </Container>
    </>
  );
}
