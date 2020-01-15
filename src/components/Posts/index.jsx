import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postAction'

const Posts = ({fetchPosts, posts=[]}) => {
  useEffect(()=>{
    fetchPosts()
  },[fetchPosts]);
  return (
    <>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  )
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, {fetchPosts})(Posts);
