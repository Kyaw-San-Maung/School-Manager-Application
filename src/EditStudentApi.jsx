import axios from 'axios'
import React from 'react'

const Api_url = "http://localhost:8080/update"

export default function EditStudentApi(id, stuInfo) {
  return (
    axios.put(Api_url+'/'+ id , stuInfo)
  )
}

