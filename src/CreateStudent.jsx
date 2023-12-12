import React from "react";
import Header from "./Navbar";

export default function CreateStudent() {
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
            
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
           Last Name
          </label>
          <input
            type="text"
            class="form-control"
            
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
           Age
          </label>
          <input
            type="number"
            class="form-control"
            
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Teacher
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
