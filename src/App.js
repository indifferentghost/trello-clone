import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '@/reducers/postsReducer';

function App() {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.posts);

  const addNewPost = () => dispatch(addPost({ post: { title: 'blah' } }));

  return (
    <>
      <div>Hello</div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => addNewPost()}>increment</button>
      {posts.map(post => (
        <div>{post.title}</div>
      ))}
    </>
  );
}

export default App;
