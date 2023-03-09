
import React, { useState } from 'react';
import SignUpImg from '../components/signUpImage.jsx'
import FacebookIcon from '../assets/facebook-Vector.png'
import InstagramIcon from '../assets/instagram-vector.png'
import GoogleIcon from '../assets/google-vector.png'
import SignUpForm from '../components/signupform.jsx'
import './signup.css'

  function SignUp(){
    return (
      <div className='Sign-up-container'>
       <div >
          <SignUpImg/>
      </div>
       <div className='hero-container'>
        <h1>Welcome to Steetchack</h1>
        <p className='hero-text'> You are one step closer to start creating your
        customers folder.</p>
      
        <SignUpForm/>
        <h4>Or sign up with </h4>
        <div className='social-media-container' >
          <figure className='social-media-icons'><img src={FacebookIcon} alt='Facebook Icon'/> </figure>
          <figure className='social-media-icons'><img src={GoogleIcon} alt='Google Icon'/> </figure>
          <figure className='social-media-icons'><img src={InstagramIcon} alt='Instagram Icon'/> </figure>
        </div>
        <p className='account-acknowledgement'>Already have an account?  <a href=''> Sign in</a></p>
        </div> 
      </div>
        
    )
  }


  export default SignUp;