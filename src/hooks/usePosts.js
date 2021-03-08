import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../reducers/postSlice";

const usePosts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.items)
  const status = useSelector(state => state.posts.status)
  useEffect(()=>{
    dispatch(getPosts())
  }, [dispatch]);

  return { posts, status }
}

export default usePosts;
