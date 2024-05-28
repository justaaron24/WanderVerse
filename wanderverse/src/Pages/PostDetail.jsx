import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DUMMY_POSTS } from '../dummy-posts';
import PostUser from '../Components/PostUser';

const PostDetail = () => {
  const { id } = useParams();
  const post = DUMMY_POSTS.find(post => post.id === id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <section className='post-detail'>
      <div className='container post-detail__container'>
        <PostUser userId={post.userID} />
        <div className='post-detail__header'>
          <Link to={`/posts/${id}/edit`} className='btn sm edit'>Edit</Link>
          <Link to={`/posts/${id}/delete`} className='btn sm delete'>Delete</Link>
        </div>
        <h2>{post.title}</h2>
        <div className='post-detail__thumbnail'>
          <img src={post.thumbnail} alt={post.title} />
        </div>
        <p>{post.desc}</p>
      </div>
    </section>
  );
};

export default PostDetail;
