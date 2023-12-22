import React from 'react'
import styles from './Header.module.css'
import "../../App.css"
import { NavLink } from 'react-router-dom'
import Cat from "../../../IMG/icons/logo-icon.svg?react"
import { userContext } from '../../useHooks/useContext'
import AccOptions from '../AccOptions/AccOptions'

import UserHeaderNav from '../userAccount/userHeaderNav/UserHeaderNav'
import UserIcon from '../userAccount/UserIcon/UserIcon'

const Header = () => {

          const [menu, setMenu] = React.useState(false)
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

                                                  {data ?
                                                            <NavLink to="conta" end
                                                                      className={styles.login} >

                                                                      <UserIcon />

                                                                      {/* <AccOptions onClick={handleLogout}></AccOptions> */}

                                                            </NavLink> :

                                                            <NavLink id='lgn' to="/login" end
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
