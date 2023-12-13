import axios from 'axios'


const api_url = "http://localhost:8080/update"
export default function EditStudentApi(id, studentEditInfo) {
  return (
      axios.put(api_url + "/" + id, studentEditInfo)
  )
}
