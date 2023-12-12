import axios from "axios";
import React from 'react'

const Api_url = "http://localhost:8080/list";

export default function GetAllStudents() {
    return axios.get(Api_url);

}
