import React from 'react'
import styles from './feed.module.css'

import FeedModal from './FeedModal/FeedModal'
import FeedPhotos from './FeedPhotos/FeedPhotos'


const Feed = () => {
          return (
                    <div className={styles.feed}>

                              <FeedModal />
                              <FeedPhotos />
                    </div>
          )
}

export default Feed
