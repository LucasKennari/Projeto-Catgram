import React from 'react'
import { Route, Routes } from 'react-router-dom'

import LoginForm from '../LoginForm'
import LoginCreate from '../LoginCreate'
import LoginPasswordLost from '../LoginPasswordLost'
import LoginResetPassword from '../LoginResetPassword'

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
