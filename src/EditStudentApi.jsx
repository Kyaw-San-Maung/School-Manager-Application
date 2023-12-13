import axios from 'axios'


const api_url = "http://localhost:8080/update"
export default function EditStudentApi(id, studentInfo) {
    return (
        axios.post(api_url + "/" + id, studentInfo)
  )
}
