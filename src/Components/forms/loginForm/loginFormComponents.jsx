import React from 'react'
import useFetch from '../../../useHooks/useFetch'
import useForm from '../../../useHooks/useForm'

import styles from "./lgnFormComp.module.css"

import InputForm from '../inputForm/InputForm'
import BtnForm from '../btnForm/BtnForm'

const url = "https://dogsapi.origamid.dev/json/jwt-auth/v1/token"

const LoginFormComponents = () => {

          const { loading, error, data, request } = useFetch()

          const username = useForm()
          const password = useForm()


          async function handleSubmit(event) {
                    event.preventDefault()

                    if (username.validate() && password.validade()) {
                              const reponse = await request(url, {
                                        method: "POST",
                                        headers: {
                                                  "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({ username, password })

                              })
                              return console.log(reponse)

                              //hook de fetch e useNavigate

                    }

          }

          if (!loading) return null
          else

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

                                                  <BtnForm loading={loading}>LOGIN</BtnForm>


                                        </form>


                              </>
                    )
}

export default LoginFormComponents
