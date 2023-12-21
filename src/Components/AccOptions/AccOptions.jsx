import React from 'react'
import styles from "./AccOptions.module.css"
const AccOptions = ({ ...props }) => {
          return (
                    <button className={styles.AccOptions} onClick={props.onClick}>
                              Logout
                    </button>
          )
}

export default AccOptions
