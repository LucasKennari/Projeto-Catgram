import React from 'react'
import { Navigate, useNavigate, } from 'react-router-dom'

import LoginFormComponents from '../../forms/loginForm/loginFormComponents'
import Modal from '../../Modal/Modal'
import { userContext } from '../../../useHooks/useContext'
import Loading from '../../loading/Loading'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const LoginForm = () => {

          React.useEffect(() => {
                    const mod = document.getElementById('lgnModal')
                    mod.classList.add('ativo')

          }, [])

          const { login, loading, error } = React.useContext(userContext)
          const notity = () => toast.error(error)
          const navigate = useNavigate()
          if (error) {

                    notity()

          }
          if (login === true) {
                    <Navigate to='/' />
          }

          else
                    return (
                              <section >
                                        {error && <ToastContainer
                                                  position="top-center"
                                                  autoClose={2500}
                                                  limit={1}
                                                  hideProgressBar={false}
                                                  newestOnTop={true}
                                                  closeOnClick
                                                  rtl={false}
                                                  pauseOnFocusLoss
                                                  draggable
                                                  pauseOnHover
                                                  theme='dark' />}

                                        <Modal>


                                                  {loading ? <Loading /> : <LoginFormComponents />}

                                        </Modal>



                              </section>
                    )
}

export default LoginForm
