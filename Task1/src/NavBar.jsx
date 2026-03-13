import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='grid grid-cols-3 h-10 navbar justify-center align-middle items-center'>
      <Link to='/Home'>React App</Link>
      <div></div>
      <div className='grid grid-cols-3'>
          <a href='#'>Home</a>
          <a href='#AboutUs'>About Us</a>
          <a href='#ContactUs'>Contact Us</a>
      </div>
    </nav>
  )
}

export default NavBar
