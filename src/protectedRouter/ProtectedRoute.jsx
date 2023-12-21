import React from 'react'
import { userContext } from '../useHooks/useContext'
import { useNavigate, NavLink } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
          const navigate = useNavigate()
          const { login } = React.useContext(userContext)
          if (login === true) {
                    children
          } else if (login === false) {
                    navigate('/login')
          } else return <></>


}
export default ProtectedRoute
