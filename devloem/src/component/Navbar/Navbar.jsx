
import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
export default function Navbar() {
  return (
    <>
<nav className={`navbar navbar-expand-lg p-2  ${style['navbar1']}`}>
<img className={`me-3 ${style['navbar-image']}`} src='./images/logo.jpg'></img>
  <Link className={`navbar-brand ${style.text}`} to="Profile">DevLoom</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto " id="navbarSupportedContent">
      <li className="nav-item active">
        <Link className="nav-link " to="HomePage">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item dropdown ">
        <Link className="nav-link dropdown-toggle" to="Catolog" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Catolog
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item " to="#">Action</Link>
          <Link className="dropdown-item" to="#">Another action</Link>
          <div className="dropdown-divider" />
          <Link className="dropdown-item" to="#">Something else here</Link>
        </div>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="LeaderBorad">LeaderBorad</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="CodeBits">Code Bits</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="Discuss">Discuss</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="Blog">Blog</Link>
      </li>  
      <li className="nav-item d-flex dropdown ">
        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fa fa-sign-in " aria-hidden="true"></i>
         Login/Signup
        </Link>
        <div className="dropdown-menu " aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="Login">Login</Link>
          <Link className="dropdown-item" to="Signup">Signup</Link>
        </div>
      </li>
    </ul>
    
  </div>
</nav>

    </>
  )
}
