import React from 'react'
import InputForm from '../inputForm/InputForm'
import BtnForm from '../btnForm/BtnForm'
import useForm from '../../../useHooks/useForm'

import styles from './registerForm.module.css'
import { Link } from 'react-router-dom'
const RegisterForm = () => {
          const username = useForm()
          const email = useForm('email')
          const password = useForm()

          function handleSubmit(event) {
                    event.preventDefault()
          }
          return (
                    <form onSubmit={handleSubmit}>
                              <InputForm label="Usuário" name='username' type='text' requerid {...username} />
                              <InputForm label="E-mail" name='email' type='email' requerid {...email} />
                              <InputForm label="Senha" name='password' type='password' requerid {...password} />

                              <div className={styles.btnForm}>
                                        <BtnForm >Registrar-se</BtnForm>
                                        <div className={styles.btnLogin}>
                                                  <h4 className={styles.subtitle}>Possui conta?</h4>
                                                  <Link className={styles.lgnLink} to='/login' >Login</Link>

                                        </div>
                              </div>
                    </form >
          )
}

export default RegisterForm
