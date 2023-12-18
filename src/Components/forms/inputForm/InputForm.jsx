import React from 'react'
import styles from "./inputForm.module.css"
const InputForm = ({ type, texto, value, setState, label, name }) => {
          function handleChange({ target }) {
                    return setState(target.value)
          }
          return (
                    <>

                              <label htmlFor={name} className={styles.lblInput}>
                                        {label}
                              </label>
                              <input
                                        className={styles.inputComp}
                                        id={name}
                                        name={name}

                                        type={type}
                                        value={value}
                                        placeholder={texto}
                                        onChange={handleChange} />

                    </>

          )
}

export default InputForm
