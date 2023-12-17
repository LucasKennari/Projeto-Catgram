import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Api from './api/Api'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Page/Home'
import Login from './Components/RotasLogin/login/Login'

const App = () => {
          return (
                    <div>
                              <BrowserRouter>
                                        <Header />
                                        <Routes>
                                                  <Route path='/'
                                                            element={<Home />} />

                                        </Routes>
                                        <Routes>
                                                  <Route path='/login/*'
                                                            element={<Login />} />

                                        </Routes>
                                        <Footer />

                              </BrowserRouter>
                    </div>
          )
}

export default App
