import React from 'react'
import styles from './FeedPhotosItem.module.css'
const FeedPhotosItem = ({ photo }) => {
          return (
                    <li className={styles.liPhotos}>
                              <img src={photo.src} alt={photo.title} />
                              <span>{photo.acesso}</span>
                    </li>
          )
}

export default FeedPhotosItem
