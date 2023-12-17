import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
import Cat from "../../../IMG/icons/cat-icon.svg?react"
const Header = () => {
          return (
                    <header className={styles.header}>
                              <nav className={`${styles.nav} container`}>
                                        <NavLink to="/" end
                                                  aria-label='Catgram - Home'
                                                  className={styles.logo}>
                                                  <Cat />
                                        </NavLink>

                                        <NavLink to="/login" end
                                                  className={styles.login}>
                                                  Login / Registrar-se
                                        </NavLink>
                              </nav>
                    </header>
          )
}

export default Header
