import React from 'react'
import UserHeader from '../userHeader/UserHeader'
import { Route, Routes } from 'react-router-dom'
import Feed from '../../Feed/Feed'
import UserPhotoPost from '../userPhotoPost/UserPhotoPost'
const UserProfile = () => {
          return (
                    <section className='container'>
                              <UserHeader />
                              <Routes>
                                        <Route path='/' element={<Feed />} />
                                        <Route path='postar' element={<UserPhotoPost />} />
                              </Routes>
                    </section>
          )
}

export default UserProfile
