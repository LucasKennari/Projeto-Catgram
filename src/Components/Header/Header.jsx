import React from 'react'
import styles from './Header.module.css'
import "../../App.css"
import { NavLink } from 'react-router-dom'
import Cat from "../../../IMG/icons/cat-icon.svg?react"
const Header = () => {


          function handleClick() {


                    const mod = document.getElementById('lgnModal')
                    mod.classList.add('ativo')
          }

          return (
                    <header className={styles.header} >
                              <nav className={`${styles.nav} container`}>
                                        <NavLink to="/" end
                                                  aria-label='Catgram - Home'
                                                  className={styles.logo}>
                                                  <Cat />
                                        </NavLink>

                                        <NavLink id='lgn' to="/login"
                                                  className={styles.login}
                                                  onClick={handleClick}

                                        >
                                                  Login / Registrar-se
                                        </NavLink>
                              </nav>
                    </header>
          )
}

export default Header
