import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Api from './api/Api'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Page/Home'
import Login from './Components/RotasLogin/login/Login'
import { UserStorage } from './useHooks/useContext'
import ChatComponents from './Components/chatComponents/ChatComponts/ChatComponents'

const App = () => {
          // return (
          //           <Api />
          // )
          return (
                    <div>
                              <BrowserRouter>
                                        <UserStorage>
                                                  <Header />
                                                  <Routes>
                                                            <Route path='/' end
                                                                      element={<Home />} />

                                                  </Routes>
                                                  <Routes>
                                                            <Route path='/login/*'
                                                                      element={<Login />} />

                                                  </Routes>
                                                  <ChatComponents />
                                                  <Footer />

                                        </UserStorage>
                              </BrowserRouter>
                    </div>
          )
}

export default App
