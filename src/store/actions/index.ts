import {
  SET_POSTS,
  SET_USERS,
  SET_SEARCH_VALUE
} from './actionTypes';
import { Post, Users } from '../types';

export const setPosts = (posts: Array<Post>) => {
  return {
    type: SET_POSTS,
    payload: posts
  }
}

export const setUsers = (users: Array<Users>) => {
  return {
    type: SET_USERS,
    payload: users
  }
}

export const setSearchValue = (searchValue: string) => {
  return {
    type: SET_SEARCH_VALUE,
    payload: searchValue
  }
}
