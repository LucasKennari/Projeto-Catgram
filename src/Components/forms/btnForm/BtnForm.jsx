import React from 'react'
import styles from './btnForm.module.css'
import Loading from '../../loading/Loading'
const BtnForm = ({ children, ...props }) => {

          return (
                    <button className={styles.btnLogin}>

                              <Loading />

                    </button>
          )
}

export default BtnForm
