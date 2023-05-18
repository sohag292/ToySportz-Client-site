import React from 'react'
import './Error.css'
import { Link, useRouteError } from 'react-router-dom'
import errorImg from '../../assets/error404.png'
export default function Error() {
  const {error} = useRouteError()
  return (
    <div>
           <section className="d-flex align-items-center h-screen p-4  text-dark">
                <div className="container d-flex flex-column align-items-center justify-content-center my-5">
                <img src={errorImg} className='w-25' alt=""  />
                    <div className=" text-center">
                        <h2 className="mb-4 font-bold fs-1 text-gray-600">
                        </h2>
                        <h3 className="font-semibold mb-4 ">{error?.message}</h3>
                        <Link to="/" className="btn btn-danger px-5 py-2 rounded">
                            Back to homepage
                        </Link>
                       
                    </div>
                </div>
            </section>
    </div>
  )
}
