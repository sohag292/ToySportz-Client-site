import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/navlogo.png'
import './Navbar.css'
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <img style={{width:"70px"}} src={logo} alt="" />
          <Link to={"/"}  className="navbar-brand fs-3 fw-bolder" href="#">  Toy<span className='text-success'>S</span>portz</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="">
                <Link className=" " aria-current="page" href="#">Home</Link>
              </li>
              <li className="">
                <Link className="" href="#" >All Toys</Link>
              </li>
              <li className="">
                <Link className="" href="#" >My Toys </Link>
              </li>
              <li className="">
                <Link className="" href="#" >Add A Toy</Link>
              </li>
              <li className="">
                <Link className="" href="#" >Blogs</Link>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-success" type="submit">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
