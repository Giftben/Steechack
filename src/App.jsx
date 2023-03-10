import { Routes, Route} from 'react-router-dom';
import { Routes } from 'react-router-dom'
import './index.css'
import Signin from './pages/SignIn/SignIn.jsx'
import Signup from './pages/SignUp/signup.jsx'

function App() {
  return (
    <div className="App">
      <Signup/>

        <Routes>
           <Route path="SignIn.jsx" element={<Signin/>}/>
        </Routes>
    </div>
  )
}

export default App
