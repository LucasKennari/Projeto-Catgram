import React from 'react'
import styles from './userHeaderNav.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Feed from '../../../Assets/feed.svg?react'
import Estatisticas from '../../../Assets/estatisticas.svg?react'
import Adicionar from '../../../Assets/adicionar.svg?react'
import Sair from '../../../Assets/sair.svg?react'
import { userContext } from '../../../useHooks/useContext'
import UserIcon from '../UserIcon/UserIcon'

const UserHeaderNav = () => {

          const navigate = useNavigate()
          const { userLogout } = React.useContext(userContext)
          const [mobile, setMobile] = React.useState(null)
          const [menu, setMenu] = React.useState(true)

          function handleClick() {
                    userLogout()
                    navigate('/')
          }
          function handleMenu(evt) {
                    evt.preventDefault()
                    if (evt.type === 'click') {
                              setMenu(false)
                    }
          }



          return (
                    <>

                              {menu ? <nav id='userHeadNav' className={`${styles.headerNaV} ' ativo'`}>
                                        <button onClick={handleMenu}>
                                                  <img src="IMG\icons\seta.svg" alt="" className={styles.btnImg} />
                                        </button>
                                        <NavLink to='/conta' end>
                                                  <Feed />
                                                  {mobile && 'Minhas Fotos'}
                                        </NavLink>

                                        <NavLink to='/conta/estatisticas'>
                                                  <Estatisticas />
                                                  {mobile && 'Estatisticas'}
                                        </NavLink>

                                        <NavLink to='/conta/postar'>
                                                  <Adicionar />
                                                  {mobile && 'Adicionar Fotos'}
                                        </NavLink>

                                        <button onClick={handleClick}> <Sair />  </button>
                              </nav> : <UserIcon />
                              }
                    </>

          )

}

export default UserHeaderNav
