import React from 'react'
import { Navigate, useNavigate, } from 'react-router-dom'
import LoginFormComponents from '../../forms/loginForm/loginFormComponents'
import Modal from '../../Modal/Modal'
import { userContext } from '../../../useHooks/useContext'
import styles from './loginform.module.css'

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

                                                  <h1 className={styles.title}>Catgram</h1>
                                                  <LoginFormComponents />

                                        </Modal>



                              </section>
                    )
}

export default LoginForm
