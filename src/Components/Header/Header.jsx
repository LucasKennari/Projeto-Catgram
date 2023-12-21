import React from 'react'
import styles from './Header.module.css'
import "../../App.css"
import { NavLink } from 'react-router-dom'
import Cat from "../../../IMG/icons/logo-icon.svg?react"
import { userContext } from '../../useHooks/useContext'
import AccOptions from '../AccOptions/AccOptions'

const Header = () => {

          const { data, userLogout } = React.useContext(userContext)

          function handleClick() {
                    const mod = document.getElementById('lgnModal')

                    mod.classList.add('ativo')

          }

          function handleLogout(event) {
                    event.preventDefault()
                    userLogout()
          }

          return (
                    <div className={styles.divHeader}>

                              <header className={styles.header} >
                                        <nav className={`${styles.nav} container`}>
                                                  <NavLink to="/" end
                                                            aria-label='Catgram - Home'
                                                            className={styles.logo}>
                                                            <Cat />
                                                  </NavLink>

                                                  {data ? <NavLink to="perfil"
                                                            className={styles.login} >
                                                            {data.nome}
                                                            <AccOptions onClick={handleLogout}></AccOptions>

                                                  </NavLink> :

                                                            <NavLink id='lgn' to="/login"
                                                                      className={styles.login}
                                                                      onClick={handleClick}

                                                            >
                                                                      Login / Cadastrar-se
                                                            </NavLink>
                                                  }

                                        </nav>
                              </header>
                    </div>
          )
}

export default Header
