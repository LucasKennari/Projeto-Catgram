import React from 'react'
import UserHeader from '../userHeader/UserHeader'
import { Route, Routes } from 'react-router-dom'
import Feed from '../../Feed/Feed'
import UserPhotoPost from '../userPhotoPost/UserPhotoPost'
import UserStats from '../userStats/UserStats'
const UserProfile = () => {
          return (
                    <section className=' container'>

                              <UserHeader />
                              <Routes>
                                        <Route path='/' end element={<Feed />} />
                                        <Route path='postar' element={<UserPhotoPost />} />
                                        <Route path='estatisticas' element={<UserStats />} />
                              </Routes>
                    </section>
          )
}

export default UserProfile
