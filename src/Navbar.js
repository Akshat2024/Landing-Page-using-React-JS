import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <>
        <div className="container">
        <div className="Nav_div">
          <span className="image">
            <img src="./Busi.jpg"></img></span>
            <Link className="home" to ="/">Home</Link>
          <span className="about">About </span>
          <span className="term">Terms of Use </span>
          <Link className = "contacts" to="contact">contact Us</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar