import React from 'react'
import styles from "./modal.module.css"
const Modal = ({ children }) => {
          const { modalContainer } = styles
          function handleClick(event) {
                    event.preventDefault()
                    const mod = document.getElementsByClassName('_ativoModal_14483_95')
                    mod[0].classList.remove('_ativoModal_14483_95')
          }

          return (
                    <section className={`
                    ${styles.modalContainer}   
                    ${styles.animeTop} 
                    ${styles.ativoModal}`}>
                              < div className={styles.modal} >
                                        <button className={styles.fechar} onClick={handleClick}>X</button>
                                        {children}
                              </div >
                    </section >
          )
}

export default Modal
