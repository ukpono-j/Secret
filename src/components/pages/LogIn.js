import React from 'react'
import "./LogIn.css"
import header_img_1 from "../images/image.jpg"
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from './Footer'


function LogIn() {
    return (
      <>
      <Navbar />

         <div className='main_login'>
            
            <div className='login_form'>
                <form className='login_form_bx'>
                    <h4>Login Form</h4>
                    <p>Email Address</p>
                    <input type="text" placeholder="Email Address" required />

                    <p className='second'>Password</p>
                    <input type="password" placeholder="Password" required />

                    <div className='login_check_bx'>
                        <input type="checkbox"  className='ch' />
                        <div className='remind'>
                            Remember me
                        </div>
                    </div>
                    <div className='login_decision'>
                     <Link to="/" className="login_return">Return to main page</Link>
                     <Link to="/signup" className='login_signUp_btn'>Sign Up</Link>
                     <Link to="/forgetPassword" className='forgot'>Forgot Password</Link>
                    </div>
                </form>
            </div>
            <div className='login_img'>
                < img src={header_img_1} alt="" />
            </div>
        </div>
      <Footer />

      </>
    )
}

export default LogIn