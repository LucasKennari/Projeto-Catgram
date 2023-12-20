import React from 'react'
import Modal from '../../Modal/Modal'
import styles from './loginCreate.module.css'
import RegisterForm from '../../forms/RegisterForm/RegisterForm'

const LoginCreate = () => {
          React.useEffect(() => {
                    const mod = document.getElementById('lgnModal')
                    mod.classList.add('ativo')

          }, [])
          return (
                    <section>

                              <Modal >

                                        <h4 className={styles.title}>Cadastrar-se</h4>
                                        <RegisterForm />

                              </Modal>


                    </section>
          )
}

export default LoginCreate
