import axios from 'axios'


const api_url = "http://localhost:8080/create"
export default function CreateStudentApi(studentInfo) {
  return axios.post(api_url, studentInfo);
  
}
