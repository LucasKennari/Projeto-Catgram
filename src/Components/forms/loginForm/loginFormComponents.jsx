import React from 'react'
// import useFetch from '../../../useHooks/useFetch'
import useForm from '../../../useHooks/useForm'
import { Link } from 'react-router-dom'
import styles from "./lgnFormComp.module.css"

import InputForm from '../inputForm/InputForm'
import BtnForm from '../btnForm/BtnForm'
import { userContext } from '../../../useHooks/useContext'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'



const LoginFormComponents = () => {


          const { userLogin, data, error, loading } = React.useContext(userContext)
          const notity = () => toast(error)
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

                    notity()

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
                                        {error && <ToastContainer
                                                  position="top-center"
                                                  autoClose={2500}
                                                  limit={1}
                                                  hideProgressBar={false}
                                                  newestOnTop={false}
                                                  closeOnClick
                                                  rtl={false}
                                                  pauseOnFocusLoss
                                                  draggable
                                                  pauseOnHover
                                                  theme="dark" />}
                              </form>
                              <div className={styles.formLink} >

                                        <Link className={styles.resetPass} to='/reset/password'>Esqueci minha senha</Link>
                                        <div className={styles.registerdiv}>
                                                  <h4 className={styles.subtitle}>Não possui conta?</h4>
                                                  <Link className={styles.register} to='register'>Registrar-se</Link>

                                        </div>

                              </div>

                    </>
          )
}

export default LoginFormComponents
