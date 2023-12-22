import React from 'react'
import InputForm from '../inputForm/InputForm'
import BtnForm from '../btnForm/BtnForm'
import useForm from '../../../useHooks/useForm'

import styles from './registerForm.module.css'
import { Link } from 'react-router-dom'
import { USER_POST } from '../../../apiSrc/api'
import { userContext } from '../../../useHooks/useContext'
import useFetch from '../../../useHooks/useFetch'
import TitleForm from '../titleForm/TitleForm'
import Loading from '../../loading/Loading'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

          const { error, loading, request } = useFetch()
          const notity = () => toast.error(error)

          async function handleSubmit(event) {
                    event.preventDefault()
                    const { response } = await request(url, options)
                    if (error) {
                              notity()
                    }
                    if (response.ok) {

                              userLogin(username.value, email.value, password.value,)
                    }

          }

          return (
                    <section>
                              {error && <ToastContainer
                                        position="top-center"
                                        autoClose={2500}
                                        limit={1}
                                        hideProgressBar={false}
                                        newestOnTop={true}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme='dark' />}
                              <form onSubmit={handleSubmit}>

                                        {/* <TitleForm>Cadastro</TitleForm> */}

                                        <InputForm texto="Username" name='username' type='text' requerid {...username} />
                                        <InputForm texto="Email" name='email' type='email' requerid {...email} />
                                        <InputForm texto="Password" name='password' type='password' requerid {...password} />

                                        <div className={styles.btnForm}>
                                                  <BtnForm > {loading ? <Loading /> : 'CADASTRAR-SE'}</BtnForm>
                                                  <div className={styles.btnLogin}>
                                                            <h4 className={styles.subtitle}>Possui conta?</h4>
                                                            <Link className={styles.lgnLink} to='/login' >LOGIN</Link>

                                                  </div>
                                        </div>
                              </form >
                    </section>
          )
}

export default RegisterForm
