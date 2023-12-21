import React from 'react'
import styles from './chatComp.module.css'
const ChatComponents = () => {
          return (
                    <div className={styles.divChat}>

                              <div className={styles.chat}>
                                        <div className={styles.divTitle}>
                                                  <h1 className={styles.title}>Chat</h1>   <h2 className={styles.btnX}>X</h2>
                                        </div>

                              </div>
                              {/* <div className={styles.divLiResponse}>

                              </div> */}
                              {/* <div className={styles.divText}>

                                        <textarea name="" id="" cols="30" rows="10" className={styles.chatText}>Envie seu texto</textarea>
                                        <button className={styles.btnMsg}>Enviar</button>
                              </div> */}

                    </div>
          )
}

export default ChatComponents
