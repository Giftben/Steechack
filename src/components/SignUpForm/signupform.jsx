import React from 'react'
import './signupform.css'
function SignUpform() {
  return (
    <form className='form'>
       <label for="full-name">
       Full name
         <input id='full-name' type="text" name="fullName" className='input-field' required />
       </label>
       <label for="email">
       Email address
         <input id='emai' type="email" name="email" className='input-field' required />
       </label>
       <label for="phone-number">
       Phone number
         <input id='phone-number' type="number" name="phoneNumber" minlength="11" maxLength="11" className='input-field' required/>
       </label>
       <label for="business-name">
       Business name
          <input id='business-name' type="text" name="businessName" className='input-field' required />
       </label>
       <label for="password">
       Password
          <input id='password' type="password" name="password"  className='input-field' required />
        </label>
       <input type="submit" value="Sign Up" className='sign-up-btn'/>
    </form>
  )
}


export default SignUpform;