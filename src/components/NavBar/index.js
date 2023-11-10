import React from 'react'
import {BsCartDash} from 'react-icons/bs'

import './index.css'

const NavBar = () => {
  const Nav = 'Nav'
  return (
    <div className="navbar-con">
      <h1 className="nav-head">E-Commerce</h1>
      <div className="nav-cart">
        <BsCartDash />
      </div>
    </div>
  )
}
export default NavBar
