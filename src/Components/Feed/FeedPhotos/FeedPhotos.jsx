import React from 'react'
import FeedPhotosItem from './FeedPhotosItem/FeedPhotosItem'
import styles from './feedPhotos.module.css'
import useFetch from '../../../useHooks/useFetch'
import { PHOTOS_GET } from '../../../apiSrc/api'
import Loading from '../../loading/Loading'
const FeedPhotos = ({ setModalPhoto }) => {

          const { data, loading, error, request } = useFetch()

          React.useEffect(() => {

                    async function fetchPhotos() {
                              const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 })
                              const { response, json } = await request(url, options)

                    }

                    fetchPhotos()
          }, [request]);
          if (error) return null
          if (loading) return <Loading />
          if (data)
                    return (
                              <ul className={`${styles.ulPhotos} animeParaEsquerda`}>
                                        {data.map((photo) => {
                                                  return (
                                                            <FeedPhotosItem photo={photo} key={photo.id} setModalPhoto={setModalPhoto} />

                                                  )
                                        })}

                              </ul>
                    )
          else
                    null

}

export default FeedPhotos
