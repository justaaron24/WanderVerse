import React, {useState} from 'react'
import { DUMMY_POSTS } from '../dummy-posts'
import PostItem from '../Components/PostItem'

const CategoryPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  
  return (
    <section className="user__posts">
    {posts.length > 0 ? <div className="container user__posts-container">
      {
        posts.map(({id, thumbnail, category, title, desc, userID}) => 
        <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} 
        title={title} description={desc} userID={userID} />)
      }
    </div> : <h2 className='center'>No posts found</h2>}
  </section>
  )
}

export default CategoryPosts 