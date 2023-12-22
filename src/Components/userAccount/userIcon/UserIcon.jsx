import React from 'react'
import styles from './userIcon.module.css'
import UserHeaderNav from '../userHeaderNav/UserHeaderNav'
const UserIcon = ({ img }) => {

          const [menu, setMenu] = React.useState(false)

          function handleClick(event) {

                    event.preventDefault()
                    if (event.type === 'click') {
                              setMenu(true)
                    }
          }

          return (
                    <>
                              {menu ? <UserHeaderNav /> :

                                        <img src="../../../../IMG/icons/Usuario.svg" alt="" className={styles.UserIcon} onClick={handleClick} />

                              }
                    </>
          )
}

export default UserIcon
