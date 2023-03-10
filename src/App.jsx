// import { Routes, Route} from 'react-router-dom';

import './index.css'
import Signin from './pages/SignIn/SignIn.jsx'
import Signup from './pages/SignUp/signup.jsx'
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import {NavBar} from './components';
import Landing from './pages/Landing/Landing';



function App() {
  return (
    <div className="App">
          <NavBar />
          <Suspense fallback={<div>Loading....</div>}>

            <Routes>

              <Route exact path='/' element={<Landing />} />\
              <Route path='*' element={<Landing /> }/>

            </Routes>
          </Suspense>
    </div>
  )
}

export default App
