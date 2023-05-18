import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/navlogo.png'
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import './Footer.css'
export default function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-3 col-lg-4 order-md-last">
              <div className="row justify-content-end mb-2">
                <div className="col-md-12 col-lg-9 text-md-right mb-md-0 mb-4 d-flex align-items-center">
                  <img style={{ width: "70px" }} src={logo} alt="" />
                  <Link to="/" className="navbar-brand fs-3 fw-bolder" href="#">  Toy<span className='text-success'>S</span>portz<span className='text-success fs-1'>.</span></Link>
                </div>
              </div>
              <p className="text-sm-center text-footer">Level-4, 34, Awal Centre, Banani, Dhaka</p>
              <p className="text-sm-center text-footer">Helpline: 01322810867 , 01322810873</p>

            </div>
            <div className="col-md-9 col-lg-8">
              <div className="row">
                <div className="col-md-5 mb-md-0 mb-4">
                  <h2 className="footer-heading">About Us</h2>
                  <ul className="list-unstyled">
                    <p className='text-footer'>Welcome to ToySportz, your ultimate destination for all things sports toys! We are passionate about providing high-quality toys that promote active play, creativity, and fun for kids of all ages.</p>
                  </ul>
                </div>
                <div className="col-md-4 mb-md-0 mb-4">
                  <h2 className="footer-heading">Quick Links</h2>
                  <ul className="list-unstyled">
                    <li><a href="#" className="py-1 d-block"><span className="mr-2 text-footer"></span>Home</a></li>
                    <li><a href="#" className="py-1 d-block"><span className="mr-2 text-footer"></span>Bike Provider</a></li>
                    <li><a href="#" className="py-1 d-block"><span className="mr-2 text-footer"></span>How to Used</a></li>
                  </ul>
                </div>
                <div class="col-md-3 mb-md-0 mb-4">
                  <h2 class="footer-heading">Services</h2>
                  <ul class="list-unstyled">
                    <li><a href="#" className="py-1 d-block"><span className="mr-2 text-footer"></span>Toy Customization</a></li>
                    <li><a href="#" className="py-1 d-block"><span className="mr-2 text-footer"></span>Express Shipping</a></li>
                    <li><a href="#" className="py-1 d-block"><span className="mr-2 text-footer"></span>Gift Wrapping</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='d-flex flex-column flex-sm-row flex-column-reverse flex-md-row justify-content-between align-items-center'>
            <p class="p-2 order-md-1 text-center text-footer">
              CopyRight &#169; 2023 All rights reserved | This is made with &#10084; by SR company
            </p>
            <div className='d-flex justify-center pb-2 order-md-2 social-icon'>
              <Link><FaFacebook /></Link>
              <Link><FaYoutube className='text-danger' /></Link>
              <Link><FaTwitter /></Link>
              <Link><FaInstagram className='text-danger' /></Link>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}
