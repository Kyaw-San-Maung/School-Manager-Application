import axios from 'axios'


const Api_url = "http://localhost:8080/list"
export default function getallStudents() {
  return axios.get(Api_url)
}
