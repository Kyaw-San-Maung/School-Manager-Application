import React, { useState } from "react";
import Header from "./Navbar";
import CreateStudentApi from "./CreateStudentApi";

export default function CreateStudent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [teacher, setTeacher] = useState("");

  const FirstNameChg = (e) => {
    setFirstName(e.target.value)
  }

  const LastNameChg = (e) => {
    setLastName(e.target.value)
  }

  const AgeChg = (e) => {
    setAge(e.target.value)
  }

  const TeacherChg = (e) => {
    setTeacher(e.target.value)
  }

  const AddStudent = (e) => {
    e.preventDefault();

    const stuInfo = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      teacher: teacher
    }

    CreateStudentApi(stuInfo);
  }

  return (
    <>
      <Header />
      <form className="addstu-form">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
           First Name
          </label>
          <input
            type="text"
            class="form-control"
            onChange={FirstNameChg}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
           Last Name
          </label>
          <input
            type="text"
            class="form-control"
            onChange={LastNameChg}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
           Age
          </label>
          <input
            type="number"
            class="form-control"
            onChange={AgeChg}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Teacher
          </label>
          <input
            type="text"
            class="form-control"
            onChange={TeacherChg}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={AddStudent}>
          Submit
        </button>
      </form>
    </>
  );
}
