import React from 'react'
import InputForm from '../inputForm/InputForm'
import BtnForm from '../btnForm/BtnForm'
import useForm from '../../../useHooks/useForm'

import styles from './registerForm.module.css'
import { Link } from 'react-router-dom'
import { USER_POST } from '../../../apiSrc/api'
import { userContext } from '../../../useHooks/useContext'
const RegisterForm = () => {
          const { userLogin } = React.useContext(userContext)
          const username = useForm()
          const email = useForm('email')
          const password = useForm()
          const { url, options } = USER_POST({
                    username: username.value,
                    email: email.value,
                    password: password.value
          })
          async function handleSubmit(event) {
                    event.preventDefault()
                    const response = await fetch(url, options)
                    console.log(response)
                    if (response.ok) {

                              userLogin(username.value, password.value)
                    }
                    // const json = await response.json()
          }
          return (
                    <form onSubmit={handleSubmit}>
                              <InputForm label="Usuário" name='username' type='text' requerid {...username} />
                              <InputForm label="E-mail" name='email' type='email' requerid {...email} />
                              <InputForm label="Senha" name='password' type='password' requerid {...password} />

                              <div className={styles.btnForm}>
                                        <BtnForm >REGISTRAR-SE</BtnForm>
                                        <div className={styles.btnLogin}>
                                                  <h4 className={styles.subtitle}>Possui conta?</h4>
                                                  <Link className={styles.lgnLink} to='/login' >Login</Link>

                                        </div>
                              </div>
                    </form >
          )
}

export default RegisterForm
