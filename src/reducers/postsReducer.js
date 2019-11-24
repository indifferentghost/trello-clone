import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const postsDisplaySlice = createSlice({
  name: 'postsDisplay',
  initialState,
  reducers: {
    addPost(state, action) {
      const { post } = action.payload;
      state.posts.push(post);
    },
  },
});

export const { addPost } = postsDisplaySlice.actions;

export default postsDisplaySlice.reducer;
