import React from 'react'
import useFetch from '../../../useHooks/useFetch'
import useForm from '../../../useHooks/useForm'

import styles from "./lgnFormComp.module.css"

import InputForm from '../inputForm/InputForm'
import BtnForm from '../btnForm/BtnForm'
import { userContext } from '../../../useHooks/useContext'





const LoginFormComponents = () => {
          const { userLogin, data, error, loading } = React.useContext(userContext)
          const [disabled, setDisabled] = React.useState(!true)
          //   const { loading, error, request } = useFetch()
          const username = useForm()
          const password = useForm()
          async function handleSubmit(event) {
                    event.preventDefault()

                    if (username.validate() && password.validate()) {

                              userLogin(username.value, password.value)
                              loading ? setDisabled(true) : setDisabled(false)
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

                                        {
                                                  loading ? <BtnForm disabled={true}>LOGIN</BtnForm> :
                                                            <BtnForm disabled={false}>LOGIN</BtnForm>

                                        }

                                        {error && <p style={{ color: "red" }}>{error}</p>}
                              </form>


                    </>
          )
}

export default LoginFormComponents
