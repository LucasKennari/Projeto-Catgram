import React from 'react'
import styles from './FeedPhotosItem.module.css'
const FeedPhotosItem = ({ photo }) => {
          return (
                    <li className={styles.liPhotos}>
                              <img src={photo.src} alt={photo.title} className={styles.liImg} />
                              <span>{photo.acesso}</span>
                    </li>
          )
}

export default FeedPhotosItem
