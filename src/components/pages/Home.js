import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import header_img_12 from "../images/happy9.jpeg"
import header_img_15 from "../images/happy10.jpeg"
import header_img_16 from "../images/happy9.jpeg"
import header_img_17 from "../images/02.jpeg"

import Navbar from '../Navbar';
import Footer from './Footer';



const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      {/* <div className='home_container'>
        < img src={header_img_17} alt="" />

      </div> */}
      <h1 className='meet_text'>Meet the Hottest Memebers in Katty</h1>
      <div className="home_hot">
        <div>
          < img src={header_img_12} alt="" />

        </div>
        <div className='hot_text'>
          <h1>“There is only one happiness in this life, to love and be loved.” —George Sand</h1>
          <p>
            Resolve to keep happy, and your joy and you shall form an invincible host against difficulties.
            The present moment is filled with joy and happiness. If you are attentive, you will see it..
            Action may not always bring happiness, but there is no happiness without action.
          </p>
          <Link className='create-account' to="/signUp">Create a free account</Link>
        </div>
      </div>
      <div className="home_hot">
        <div className='hot_text'>
          <h1>“Adopt the pace of nature: Her secret is patience.” —Ralph Waldo Emerson</h1>
          <p>
            Spread love everywhere you go. Let no one ever come to you without leaving happier,
            there is only one happiness in this life, to love and be loved.
            Be happy for this moment. This moment is your life
          </p>
          <Link className='create-account' to="/signUp"> Smile More</Link>
        </div>
        <div>< img src={header_img_15} alt="" /> </div>

      </div>
      <Footer />
    </div>
  )
}

export default Home