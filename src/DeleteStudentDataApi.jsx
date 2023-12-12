import axios from 'axios'


const Api_url = "http://localhost:8080/delete"

export default function deleteStudentData(id) {
  return (
    axios.post(Api_url +'/'+ id)
  )
}
