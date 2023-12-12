import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons/io5";
import { Navbar, NavbarBrand } from "react-bootstrap";
import { IoSchoolOutline } from "react-icons/io5";

export default function Dashboard() {
  return (
    <>
      <Navbar bg="dark" light mb-2>
        <NavbarBrand className="text-white">
          <IoSchoolOutline className="font-size-xxl" />
          <span className="font-size-l ml-3">School Manager Application</span>
        </NavbarBrand>
      </Navbar>
    </>
  );
}
