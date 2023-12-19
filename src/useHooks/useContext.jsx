import React, { createContext } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../apiSrc/api'
import { useNavigate } from 'react-router-dom'


export const userContext = createContext()

export const UserStorage = ({ children }) => {
          const navigate = useNavigate()
          const [data, setData] = React.useState(null)
          const [login, setLogin] = React.useState(null)
          const [loading, setLoading] = React.useState(false)
          const [error, setError] = React.useState(false)


          React.useEffect(() => {
                    async function autoLogin() {
                              try {
                                        setError(null)
                                        setLoading(true)
                                        const token = window.localStorage.getItem('token')
                                        if (token) {
                                                  const { url, options } = TOKEN_VALIDATE_POST(token)
                                                  const response = await fetch(url, options);
                                                  if (!response.ok) {
                                                            throw new Error('Token inválido')
                                                  }
                                                  await getUser(token)


                                        }

                              } catch (error) {
                                        return null
                              } finally {
                                        setLoading(false)
                              }

                    }
                    autoLogin()
          }, [])


          async function getUser(token) {
                    setLoading(true)
                    const { url, options } = USER_GET(token)

                    const response = await fetch(url, options)
                    const json = await response.json()

                    setData(json)
                    setLogin(true)
                    setLoading(false)
          }

          async function userLogin(username, password) {
                    setLoading(true)
                    const { url, options } = TOKEN_POST({ username, password })
                    const tokenRes = await fetch(url, options);
                    const json = await tokenRes.json()

                    window.localStorage.setItem('token', json.token)
                    getUser(json.token)
                    setLoading(false)
                    navigate('/')
          }

          return (
                    < userContext.Provider value={{ userLogin, data, loading }}>
                              {children}
                    </userContext.Provider>
          )
}


