import React from 'react'
import useFetch from '../../../useHooks/useFetch'
import useForm from '../../../useHooks/useForm'

import styles from "./lgnFormComp.module.css"

import InputForm from '../inputForm/InputForm'
import BtnForm from '../btnForm/BtnForm'
import { userContext } from '../../../useHooks/useContext'





const LoginFormComponents = () => {
          const { userLogin, data } = React.useContext(userContext)

          //   const { loading, error, request } = useFetch()
          const username = useForm()
          const password = useForm()
          async function handleSubmit(event) {
                    event.preventDefault()

                    if (username.validate() && password.validate()) {

                              userLogin(username.value, password.value)

                    }



          }


          return (
                    <>

                              <div className={styles.iconLogin} >
                                        <img src="IMG\icons\lucas-03.png" alt="CAT-ICON" />

                              </div>
                              <form onSubmit={handleSubmit} className={styles.lgnFormComp}>



                                        <InputForm
                                                  label="Login" type="text" name="username" {...username} />
                                        <InputForm
                                                  label="Password" type="password" name="password" {...password} />

                                        <BtnForm>LOGIN</BtnForm>


                              </form>


                    </>
          )
}

export default LoginFormComponents
