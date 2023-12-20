import React from 'react'
import { userContext } from '../../../useHooks/useContext'

import styles from './loginCreate.module.css'

import Modal from '../../Modal/Modal'
import RegisterForm from '../../forms/RegisterForm/RegisterForm'

import Loading from '../../loading/Loading'

const LoginCreate = () => {

          React.useEffect(() => {
                    const mod = document.getElementById('lgnModal')
                    mod.classList.add('ativo')

          }, [])

          return (
                    <section>


                              <Modal >

                                        <RegisterForm />

                              </Modal>


                    </section>
          )
}

export default LoginCreate
