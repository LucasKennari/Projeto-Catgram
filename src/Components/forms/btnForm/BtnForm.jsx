import React from 'react'
import styles from './btnForm.module.css'
import Loading from '../../loading/Loading'
import { userContext } from '../../../useHooks/useContext'


const BtnForm = ({ children, disabled, ...props }) => {

          const { loading } = React.useContext(userContext)

          return (
                    <button className={styles.btnLogin} disabled={disabled}>

                              {loading ? < Loading /> : children}

                    </button>
          )
}

export default BtnForm
