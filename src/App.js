import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { addPost } from '@/reducers/postsReducer';

const handler = async (...args) => {
  const res = await fetch(...args).then(result => result.json());
  return res;
};

function App() {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.posts);
  const { data } = useSWR('/api/tasks', handler, {
    suspense: true,
    revalidateOnFocus: false,
  });

  const addNewPost = () => dispatch(addPost({ post: { title: 'blah' } }));

  useEffect(() => console.info(data), [data]);

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
