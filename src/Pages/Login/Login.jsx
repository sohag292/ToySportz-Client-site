import React, { useContext, useState } from 'react'
import './Login.css'
import loginImg from '../../assets/loginImg.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { AuthContext, auth } from '../../Provider/AuthProvider'
import ToySportTitle from '../../TitleHooks/ToySportTitle';
export default function Login() {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  ToySportTitle("Login");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'
  const [succes, setSuccess] = useState();
  const [error, setError] = useState()

  const handleLogin = event => {
    event.preventDefault();
    setSuccess('')
    setError('')
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        setSuccess("Login successfully")
        form.reset()
        navigate(from, {replace:true})
      })
      .catch(error => {
        setError("Email or password is incorrect");
        form.reset()
      })
  }
  
  const handleGoogleLogin = () => {
    signInWithGoogle()

      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace:true})
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='login p-5'>
      <div className="mx-auto col-md-5 bg-light px-4 py-5 rounded">
        <img src={loginImg} className='img-fluid mx-auto d-block pb-3 loginimg' alt="" />
        <h3 className="text-center">Login account</h3>
        <p className=" text-success text-center fs-5 fw-bolder">{succes}</p>
        <form onSubmit={handleLogin}>
          <div className="text-success">
            <p className="text-success text-center fs-5 fw-bolder"></p>
          </div>
          <div className="form-group mb-2">
            <label>Email address</label>
            <input type="email" className="form-control" name="email" placeholder="Enter your email address" required />
          </div>
          <div className="form-group mb-2">
            <label>Password</label>
            <input type="password" className="form-control" name="password" placeholder="Enter your Password" required />
          </div>
          <div className="text-danger">
            {error}
          </div>
          <div className="d-grid gap-2 mt-4 mb-3">
            <button className="btn btn-primary" type="submit">Login</button>
            <h6 className="text-center">OR</h6>
            <button onClick={handleGoogleLogin} className="btn btn-danger">
              <FaGoogle/> Login With Google
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
