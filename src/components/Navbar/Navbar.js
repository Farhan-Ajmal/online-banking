import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Toggle from '../Toggle/Toggle'

function Navbar() {
  return (
    <div className="nav-div">
      <nav className="container navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">ONLINE BANKING</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Toggle />
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" style={{color: "#FF6363"}} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Inner Page</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success me-4" type="submit">Free Templates</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
