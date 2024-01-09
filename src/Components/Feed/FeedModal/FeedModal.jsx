import React from 'react'
import styles from './feedModal.module.css'
import useFetch from '../../../useHooks/useFetch'
import { PHOTO_GET } from '../../../apiSrc/api'
import PhotoContent from '../../Photo/PhotoContent/PhotoContent'
import Loading from '../../loading/Loading'
const FeedModal = ({ photo, setModalPhoto }) => {

          const { data, loading, error, request } = useFetch()

          React.useEffect(() => {
                    const { url, options } = PHOTO_GET(photo.id)
                    request(url, options)
          }, [photo, request])
          function handleOutsideClick(e) {
                    if (e.target === e.currentTarget) {
                              setModalPhoto(null)
                    }
          }
          return (


                    <div className={styles.modalContainer} onClick={handleOutsideClick}>
                              {/* {error  mostrar erro} */}
                              {loading && <Loading />}
                              {data && <PhotoContent data={data} />}
                    </div>


          )
}

export default FeedModal
