import React from 'react'
import useFetch from '../../../useHooks/useFetch'

import styles from "./lgnFormComp.module.css"

import InputForm from '../inputForm/InputForm'
import BtnForm from '../btnForm/BtnForm'

const url = "https://dogsapi.origamid.dev/json/jwt-auth/v1/token"

const LoginFormComponents = () => {

          const { loading, error, data, request } = useFetch()
          const [username, setUsername] = React.useState("")
          const [password, setPassword] = React.useState("")

          async function handleSubmit(event) {

                    event.preventDefault()

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

          if (!loading) return null
          else

                    return (
                              <>
                                        <div className={styles.iconLogin} >
                                                  <img src="IMG\icons\lucas-03.png" alt="CAT-ICON" />

                                        </div>
                                        <form onSubmit={handleSubmit} className={styles.lgnFormComp}>



                                                  <InputForm
                                                            label="Login" type="text" name="username" />
                                                  <InputForm
                                                            label="Password" type="password" name="password" />

                                                  <BtnForm loading={loading}>LOGIN</BtnForm>


                                        </form>


                              </>
                    )
}

export default LoginFormComponents
