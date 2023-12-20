import React from 'react'
import { Navigate, useNavigate, } from 'react-router-dom'
import LoginFormComponents from '../../forms/loginForm/loginFormComponents'
import Modal from '../../Modal/Modal'
import { userContext } from '../../../useHooks/useContext'

const LoginForm = () => {

          React.useEffect(() => {
                    const mod = document.getElementById('lgnModal')
                    mod.classList.add('ativo')

          }, [])

          const { login } = React.useContext(userContext)

          const navigate = useNavigate()
          if (login === true) {
                    <Navigate to='/' />
          }
          else
                    return (
                              <section >
                                        <Modal>

                                                  <h1>Login</h1>
                                                  <LoginFormComponents />

                                        </Modal>



                              </section>
                    )
}

export default LoginForm
