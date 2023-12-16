import React from 'react'
import UserPost from './endPoints/UserPost'
import TokenPost from './endPoints/TokenPost'
import Photopost from './endPoints/Photopost'
import PhotoGet from './endPoints/PhotoGet'

const Api = () => {
          return (
                    <div>
                              <h2>User Post</h2>
                              <UserPost />
                              <h2>Token Post</h2>
                              <TokenPost />
                              <h2>PhotoPOST</h2>
                              <Photopost />
                              <h2>PhotoGET</h2>
                              <PhotoGet />
                    </div>
          )
}

export default Api
