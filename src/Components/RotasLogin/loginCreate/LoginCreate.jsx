import React from 'react'



import Modal from '../../Modal/Modal'
import RegisterForm from '../../forms/RegisterForm/RegisterForm'

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
