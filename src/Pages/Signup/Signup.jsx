import React, { useContext, useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToySportTitle from '../../TitleHooks/ToySportTitle';
export default function Signup() {
    ToySportTitle("sinUp")
    const { createUser, updateUserData, logOut } = useContext(AuthContext)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    
    const handleSignup = event =>{
        
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        if (password.length < 6) {
            setError("Password should be at least 6 characters");
            return;
        }

        // Create user
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                toast.success('Your Registration Successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                form.reset()
                updateUserData(result.user, name, photo);
                logOut();
            })
            .catch(error => {
                setError(error.message);
                form.reset()
            })
    }
    return (
        <div className='login p-5'>
            <div className="mx-auto col-md-5 bg-light px-4 py-5 rounded">
                <h3 className="text-center mb-4">Register your account</h3>
                <form onSubmit={handleSignup}>
                    <div className="text-success">
                        <p className="text-success text-center fs-5 fw-bolder"></p>
                    </div>
                    <div className="form-group mb-2">
                        <label>Name:</label>
                        <input type="name" className="form-control" name="name" placeholder="Enter your Name" required />
                    </div>
                    <div className="form-group mb-2">
                        <label>Email address</label>
                        <input type="email" className="form-control" name="email" placeholder="Enter your email address" required />
                    </div>
                    <div className="form-group mb-2">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Enter your Password" required />
                    </div>
                    <div className="form-group mb-2">
                        <label>Photo url</label>
                        <input type="text" className="form-control" name="photo" placeholder="Enter your photo url" required />
                    </div>
                    <div className="text-danger">
                    <p className="text-center">{error}</p>
                    </div>
                    <div className="d-grid gap-2 mt-4 mb-3">
                        <button className="btn btn-primary" type="submit">Register</button>
                    </div>
                    <ToastContainer />
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
