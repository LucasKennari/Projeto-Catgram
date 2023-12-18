import React from 'react'
import { Route, Routes } from 'react-router-dom'

import LoginForm from '../loginForm/LoginForm'
import LoginCreate from '../loginCreate/LoginCreate'
import LoginPasswordLost from '../loginPass/LoginPasswordLost'
import LoginResetPassword from '../loginPass/LoginResetPassword'

const Login = () => {
          return (
                    <div>
                              <Routes>
                                        <Route path='/' element={<LoginForm />} />
                                        <Route path='/registrar' element={<LoginCreate />} />
                                        <Route path='/pardeu' element={<LoginPasswordLost />} />
                                        <Route path='/resetar' element={<LoginResetPassword />} />
                              </Routes>
                    </div>
          )
}

export default Login
