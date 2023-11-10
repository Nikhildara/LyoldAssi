import React from 'react'
import {BsCartDash} from 'react-icons/bs'
import './index.css'

const Navbar = () => {
  const Nav = 'Nav'
  return (
    <div>
      <div className="navbar-con">
        <h1 className="nav-head">E-Commerce</h1>
        <div className="nav-cart">
          <BsCartDash />
        </div>
      </div>
    </div>
  )
}
export default Navbar
