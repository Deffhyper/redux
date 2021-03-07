import React  from 'react';
import usePosts from '../../hooks/usePosts';

const Posts = () => {
  const {posts, status} = usePosts();
  return (
    <>
      <div>Status: {status}</div>
      {(status === 'pending') ? (
        <div>...Loading</div>
      ) : posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      }
    </>
  )
}

export default Posts;
