import React from 'react'
import styles from "./modal.module.css"
const Modal = ({ children, lgnModal, setLgnModal }) => {




          function handleClick(event) {

                    const mod = document.getElementById('lgnModal')
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
