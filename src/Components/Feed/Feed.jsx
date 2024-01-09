import React from 'react'
import styles from './feed.module.css'

import FeedModal from './FeedModal/FeedModal'
import FeedPhotos from './FeedPhotos/FeedPhotos'


const Feed = () => {

          const [modalPhoto, setModalPhoto] = React.useState(null)

          return (
                    <div className={styles.feed}>

                              {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
                              <FeedPhotos setModalPhoto={setModalPhoto} />
                    </div>
          )
}

export default Feed
