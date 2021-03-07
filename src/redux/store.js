import { configureStore } from '@reduxjs/toolkit'
import postSlice from "../reducers/postSlice";

export default configureStore({
  reducer: {
    posts: postSlice
  }
})
