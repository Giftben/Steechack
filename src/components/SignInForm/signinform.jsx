import React from 'react'
import './signinform.css'

export default function () {
  return (
    <form className='form'>
       <label for="full-name" className='label'>
       Full name
         <input id='full-name' type="text" name="fullName" className='input-field' required />
       </label>
       <label for="password" className='label'>
       Password
          <input id='password' type="password" name="password"  className='input-field' required />
        </label>
        <div class="wrapper">
             <label for="remember-me" className='inline float-left'><input id="remember-me" type="checkbox" name="remember-me" class="inline" value="remember-me" /> Remember Me</label>
              <a href="#" className='inline float-right'>Forgot Password</a>
              </div>
          <div>
            <button id="submit" type="submit" value="Submit" className='sign-in-btn'> Sign In </button>
          </div>

    </form>
  )
}
