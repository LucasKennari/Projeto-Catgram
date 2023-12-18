import React from 'react'
import { Link } from 'react-router-dom'
import LoginFormComponents from '../../forms/loginForm/loginFormComponents'
import Modal from '../../Modal/Modal'

const LoginForm = () => {
          return (
                    <section>
                              <h1>Login</h1>
                              <Modal>
                                        <LoginFormComponents />
                              </Modal>
                              <Link to="/login/registrar" end="true">Cadastro</Link>

                    </section>
          )
}

export default LoginForm
