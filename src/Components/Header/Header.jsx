import React from 'react'
import styles from './Header.module.css'
import "../../App.css"
import { NavLink } from 'react-router-dom'
import Cat from "../../../IMG/icons/cat-icon.svg?react"
import { userContext } from '../../useHooks/useContext'

const Header = () => {

          const { data } = React.useContext(userContext)

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

                                        {data ? <NavLink to="/account"
                                                  className={styles.login} >
                                                  {data.nome}
                                        </NavLink> :

                                                  <NavLink id='lgn' to="/login"
                                                            className={styles.login}
                                                            onClick={handleClick}

                                                  >
                                                            Login / Registrar-se
                                                  </NavLink>
                                        }
                              </nav>
                    </header>
          )
}

export default Header
