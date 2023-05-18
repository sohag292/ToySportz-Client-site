import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
export default function Signup() {
    return (
        <div className='login p-5'>
            <div className="mx-auto col-md-5 bg-light px-4 py-5 rounded">
                <h3 className="text-center mb-4">Register your account</h3>
                <form>
                    <div className="text-success">
                        <p className="text-success text-center fs-5 fw-bolder"></p>
                    </div>

                    <div className="form-group">
                        <label for="formEmail">Name:</label>
                        <input type="name" className="form-control" name="name" placeholder="Enter your Name" required />
                    </div>

                    <div className="form-group">
                        <label for="formEmail">Email address</label>
                        <input type="email" className="form-control" name="email" placeholder="Enter your email address" required />
                    </div>
                    <div className="form-group">
                        <label for="formPassword">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Enter your Password" required />
                    </div>
                    <div className="form-group">
                        <label for="formPassword">Photo url</label>
                        <input type="text" className="form-control" name="photo" placeholder="Enter your photo url" required />
                    </div>
                    <div className="text-danger">
                    </div>
                    <div className="d-grid gap-2 mt-4 mb-3">
                        <button className="btn btn-primary" type="submit">Register</button>
                    </div>
                    <div className="text-center">
                        <p className="text-secondary">
                        Already Have an account? <Link to="/login">Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
