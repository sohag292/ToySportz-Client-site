import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/navlogo.png'
import './Navbar.css'
import ActiveLink from '../../ActiveLink/ActiveLink'
import { AuthContext } from '../../../Provider/AuthProvider'
export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then()
      .catch(error => console.log(error))
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <img style={{ width: "70px" }} src={logo} alt="" />
          <Link to="/" className="navbar-brand fs-3 fw-bolder" href="#">  Toy<span className='text-success'>S</span>portz</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li>
                <ActiveLink to='/' aria-current="page" >Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to='/alltoys'  >All Toys</ActiveLink>
              </li>

              {user && (
                <>
                  <li>
                    <ActiveLink to='/mytoys' >My Toys </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink to='/addtoy'  >Add Toy</ActiveLink>
                  </li>
                </>
              )}
              <li>
                <ActiveLink to='/blogs'  >Blogs</ActiveLink>
              </li>
            </ul>
            <div className="row">
              <div className="col-lg-6">
                <div>
                  {user && (
                    <div className="profile mb-1">
                      <img title={user.displayName} className="img-fluid" src={user.photoURL} />
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-6">
                <div>
                  {user ? (
                    <button onClick={handleLogout} className="btn btn-success">Logout</button>
                  ) : (
                    <Link to="/login">
                      <button className="btn btn-success">Login</button>
                    </Link>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}
