import React from 'react'
import styles from "./inputForm.module.css"
const InputForm = ({ type, texto, value, setState }) => {
          function handleChange({ target }) {
                    return setState(target.value)
          }
          return (
                    <label htmlFor="" >
                              <input type={type}
                                        value={value}
                                        placeholder={texto}
                                        onChange={handleChange} className={styles.inputComp} />
                    </label>

          )
}

export default InputForm
