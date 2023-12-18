import React from 'react'

const useFetch = () => {

          const [loading, setLoading] = React.useState(true)
          const [data, setData] = React.useState(null)
          const [error, setError] = React.useState(null)

          const request = React.useCallback(async (url, options) => {
                    let response;
                    let json;

                    try {
                              setLoading(true)
                              response = await fetch(url, options)
                              json = await response.json()
                              return setData(json)

                    } catch (error) {
                              setData(null)
                              return setError(error)
                    } finally {
                              return loading(false)
                    }

                    // // return { response, json }
          }, [loading])
          return { loading, data, error, request }
}

export default useFetch
