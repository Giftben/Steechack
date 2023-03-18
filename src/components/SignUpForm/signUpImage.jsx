import React from 'react'
import Image from '../../assets/sign-up-image.png'
import './signUpImage.css'

export default function SignUpImage() {
  return (
    <div className='signupimg-container'>
        <div className='side-image-container'>
       <img src={Image} alt="Side Image" className='side-image' />
        </div>
      <div className='img-text'>
       <p className='img-quote'>“Dress shabbily and they remember the dress;
dress impeccably and they remember the
woman.”</p>
        <p className='img-quote-writer' >Coco Chanel</p>
        <p className='img-quote-writer-description' >Fashion designer</p>
      </div>
    </div>
  )
}
