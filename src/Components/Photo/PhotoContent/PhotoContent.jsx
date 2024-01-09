import React from 'react'
import styles from './PhotoContent.module.css'
import { Link } from 'react-router-dom';
import PhotoComments from '../photoComments/PhotoComments';
const PhotoContent = ({ data }) => {
          const { photo, comments } = data;
          return (
                    <div className={styles.photo}>
                              <div className={styles.img}><img src={photo.src} alt={photo.title} /></div>

                              <div className={styles.details}>
                                        <div>

                                                  <div className={styles.barra}>

                                                            <p className={styles.author}>
                                                                      <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
                                                                      <span className={styles.visualizacao}>{photo.acessos}</span>
                                                            </p>
                                                  </div>
                                                  <h1 className={styles.title}>
                                                            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                                                  </h1>
                                        </div>
                              </div>
                              <PhotoComments id={photo.id} comments={comments} />
                    </div>
          )
}

export default PhotoContent
