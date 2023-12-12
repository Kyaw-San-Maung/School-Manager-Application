
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-icons/io5'
import { Navbar, NavbarBrand } from 'react-bootstrap'
import { IoSchoolOutline } from 'react-icons/io5'

export default function Dashboard() {
  return (
      <>
          <Navbar color='dark' light mb-2>
              <NavbarBrand className='textwhite'>
                  <IoSchoolOutline className='font-size-xxl'/>
              </NavbarBrand>
          </Navbar>
      </>
  )
}
