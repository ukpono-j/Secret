import React from 'react'
import { Link } from 'react-router-dom'
import "./SignUp.css"
import header_img_1 from "../images/16.webp"
import Navbar from '../Navbar'
import Footer from './Footer'


function SignIn() {
  return (
    <>
    {/* ================== Navigation bar =================== */}
      <Navbar />

      <div className='main_signin'>
        <div className='signUp_img'>
          < img src={header_img_1} alt="" />

        </div>
        <div className='signUp_form'>
          <form className='SignUp_'>
            <h4>Sign Up Form</h4>
            <p>First Name</p>
            <input type="text" placeholder="Email Address" required />

            <p>Last Name</p>
            <input type="text" placeholder="Email Address" required />

            <p>Email Address</p>
            <input type="text" placeholder="Email Address" required />

            <p className='second'>Password</p>
            <input type="password" placeholder="Password" required />

            <p className='second'>Confirm Password</p>
            <input type="password" placeholder="Confirm Password" required />

            <div className='login_decision'>
              <Link to="/login" className="login_return">Login</Link>
              <Link to="/mainHome" className='login_signUp_btn'>Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer/>

    </>
  )
}

export default SignIn