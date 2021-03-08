import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json()
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    status: '',
    items: []
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, {payload}) => {
      state.status = 'success'
      state.items = payload
    },
    [getPosts.pending]: (state, action) => {
      state.status = 'pending'
    },
    [getPosts.rejected]: (state, action) => {
      state.status = 'rejected'
    }
  }
})

export default postsSlice.reducer
