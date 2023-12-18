import React from 'react'
import useFetch from '../../../useHooks/useFetch'
import Login from "../../../../IMG/icons/Login.svg?react"

import styles from "./lgnFormComp.module.css"

import InputForm from '../inputForm/InputForm'

const url = " https://dogsapi.origamid.dev/json/jwt-auth/v1/token"

const LoginFormComponents = () => {
          const { loading, error, data, request } = useFetch()
          const [username, setUsername] = React.useState("")
          const [password, setPassword] = React.useState("")



          async function handleSubmit(event) {

                    event.preventDefault()
                    try {
                              const { response, json } = await request(url, {
                                        method: "POST",
                                        headers: {
                                                  "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({ username, password })

                              })
                    } catch (error) {
                              throw "Error 404"
                    }
                    //hook de fetch e useNavigate
          }



          return (
                    <>
                              <div className={styles.iconLogin} >
                                        <img src="IMG\icons\lucas-02.png" alt="CAT-ICON" />

                              </div>
                              <form onSubmit={handleSubmit} className={styles.lgnFormComp}>



                                        <InputForm value={username}
                                                  texto='Username'
                                                  setState={setUsername} />

                                        <InputForm
                                                  value={password}
                                                  texto='Password'
                                                  setState={setPassword}
                                                  type={"password"} />

                                        <button className={styles.btnLogin}>LOGIN</button>


                              </form>


                    </>
          )
}

export default LoginFormComponents
