import React from 'react'
import styles from "./modal.module.css"
import { userContext } from '../../useHooks/useContext'
const mod = document.getElementById('lgnModal')

const Modal = ({ children }) => {

          const { data } = React.useContext(userContext)


          function handleClick(event) {


                    mod.classList.remove('ativo')
                    // console.log(mod.classList.remove('ativo'))
          }

          return (<>
                    <section id='lgnModal' className={`
                    ${styles.modalContainer}  
                    ${styles.animeTop} ,
               
                   `}>
                              < div className={styles.modal} >
                                        <button className={styles.fechar} onClick={handleClick}>X</button>
                                        {children}
                              </div >
                    </section >
          </>
          )
}

export default Modal
