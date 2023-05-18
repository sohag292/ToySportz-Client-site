import React from 'react'
import './Login.css'
import loginImg from '../../assets/loginImg.png'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className='login p-5'>
      <div className="mx-auto col-md-5 bg-light px-4 py-5 rounded">
        <img src={loginImg} className='img-fluid mx-auto d-block pb-3 loginimg'  alt="" />
        <h3 className="text-center">Login account</h3>
          <form>
            <div className="text-success">
              <p className="text-success text-center fs-5 fw-bolder"></p>
            </div>
            <div className="form-group">
              <label for="formEmail">Email address</label>
              <input type="email" className="form-control" name="email" placeholder="Enter your email address" required/>
            </div>
            <div className="form-group">
              <label for="formPassword">Password</label>
              <input type="password" className="form-control" name="password" placeholder="Enter your Password" required/>
            </div>
            <div className="text-danger">
            </div>
            <div className="d-grid gap-2 mt-4 mb-3">
              <button className="btn btn-primary" type="submit">Login</button>
              <h6 className="text-center">OR</h6>
              <button className="btn btn-danger">
                <i className="fab fa-google"></i> Login With Google
              </button>
            </div>
            <div className="text-center">
              <p className="text-secondary">
                Don't have an account? <Link to="/singup">Register</Link>
              </p>
            </div>
          </form>
      </div>
    </div>
  )
}
