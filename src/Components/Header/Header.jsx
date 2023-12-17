import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
          return (
                    <div className={styles.header}>
                              <nav className="container">
                                        <NavLink to="/" end>Home</NavLink>
                                        <NavLink to="/login" end>Login / Registrar-se</NavLink>
                              </nav>
                    </div>
          )
}

export default Header
