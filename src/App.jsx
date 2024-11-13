import { useState } from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Email from './pages/forgot/Email'
import OTP from './pages/forgot/OTP'
import NewPass from './pages/forgot/NewPass'
import PassReset from './pages/forgot/PassReset'
import Congrats from './pages/forgot/Congrats'
import Admin from './pages/admin/admin'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgot-password' element={<Email />}/>
          <Route path='/frogot-password/otp' element={<OTP />}/>
          {/* <Route path='/frogotpassword/resetpass' element={<PassReset />}/> */}
          <Route path='/frogot-password/new' element={<NewPass />}/>
          <Route path='/frogot-password/update' element={<Congrats />}/>
          <Route path='/admin' element={<Admin />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
