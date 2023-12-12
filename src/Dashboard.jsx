import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons/io5";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { IoMan, IoSchool, IoSettings } from "react-icons/io5";
import "./Dashboard.css";
import getallStudents from "./Api";
import deleteStudentData from "./DeleteStudentDataApi";
import Header from "./Navbar";


export default function Dashboard() {
  const [student, setSutdent] = useState([]);

  useEffect(() => {
    getallStudents().then((res) => setSutdent(res.data));
  }, []);
  return (
    <>
      <Header />
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
            <a href="/createStu">
              <Button className="btn">
                <span className="font-size-l">Create New Student</span>
              </Button>
            </a>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        {student.map((students) => {
          return (
            <Row className="mt-4">
              <Col sm="12">
                <Card body>
                  <CardTitle tag="h5">
                    <IoMan className="font-size-xl" />{" "}
                    {students.firstName + " " + students.lastName}
                  </CardTitle>
                  <CardBody>
                    <Row>
                      <Col sm="4" className="text-center">
                        <span style={{ fontWeight: "600" }}>Class : </span>
                        <span>Second Year</span>
                      </Col>
                      <Col sm="4" className="text-center">
                        <span style={{ fontWeight: "600" }}>Age : </span>
                        <span>{students.age}</span>
                      </Col>
                      <Col sm="4" className="text-center">
                        <span style={{ fontWeight: "600" }}>Teacher : </span>
                        <span>{students.teacher}</span>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <Row>
                      <Col sm="6">
                        <Button>Edit</Button>
                      </Col>
                      <Col sm="6">
                        <Button onClick={() => deleteStudentData(students.id)}>
                          Delete
                        </Button>
                      </Col>
                    </Row>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
}
