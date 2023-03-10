import React from 'react'
import Image from '../../assets/signinImage.png'
import '../SignUpForm/signUpImage.css'
import './signInImage.css'

export default function signInImage() {
  return (
    <div className='signupimg-container'>
    <div className='side-image-container'>
   <img src={Image} alt="Side Image" className='side-image' />
      <figure></figure>
    </div>
  <div className='img-text'>
   <p className='img-quote'>“My work comes to life when the thread goes
on top of the fabric.”</p>
    <p className='img-quote-writer' >-Lucy Silliman</p>
    <p className='img-quote-writer-description' >Fashion designer</p>
  </div>
</div>
  )
}
