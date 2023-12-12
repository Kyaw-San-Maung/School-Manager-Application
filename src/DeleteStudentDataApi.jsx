import axios from 'axios'
import React from 'react'

Api_url = "http://localhost:8080/delete/"

export default function deleteStudentData(id) {
  return (
    axios.post(Api_url, id)
  )
}
