import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons/io5";
import { Navbar, NavbarBrand } from "react-bootstrap";
import { IoSchoolOutline } from "react-icons/io5";
import React from "react";

export default function Header() {
  return (

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">
        <IoSchoolOutline className="font-size-xxl" />
         <span className="font-size-m ml-3">School Manager Application</span>
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item font-size-m">
              <a class="nav-link active" aria-current="page" href="createStu">
                Add Student
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
