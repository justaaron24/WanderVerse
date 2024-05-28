import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar1.jpg'

const PostUser = () => {
  return (
    <Link to={`/posts/users/sdfsdf`} className='post__user'>
        <div className="post__user-avatar">
            <img src={Avatar} alt="" />
        </div>
        <div className="post__user-details">
            <h5>By: Aaron A</h5>
            <small>Just Now</small>
        </div>
    </Link>
  
  )
}

export default PostUser