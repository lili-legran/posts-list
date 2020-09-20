import React, { useEffect, useMemo } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { PostsState } from '../../store/types';
import { PostItem } from '../PostItem/PostItem';
import { setPosts, setUsers } from '../../store/actions';
import { StyledList, StyledEmptyMessage } from './styled';

export const PostsList: React.FunctionComponent = () => {
  const posts = useSelector((state: PostsState) => state.posts);
  const users = useSelector((state: PostsState) => state.users);
  const searchValue = useSelector((state: PostsState) => state.searchValue);

  const dispatch = useDispatch();

  const postsInfo = useMemo(() => {
    return posts
      .map(
        post => {
          const currentUser = users.find((user) => user.id === post.userId);
          return ({
            name: currentUser ? currentUser.name : '',
            userName: currentUser ? currentUser.username : '',
            title: post.title,
            body: post.body,
            id: post.id
          })
      })
      .filter(
        (post) => post.name.includes(searchValue)
          || post.userName.includes(searchValue)
          || post.title.includes(searchValue)
          || post.body.includes(searchValue)
        );
    }, [posts, users, searchValue]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com`;

    const postsRequest = axios.get(`${url}/posts`)
    const usersRequest = axios.get(`${url}/users`)

    Promise.all([postsRequest, usersRequest])
      .then(response => {
        const posts = response[0].data;
        const users = response[1].data;
        dispatch(setPosts(posts));
        dispatch(setUsers(users));
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <StyledList>
      {
        postsInfo.length > 0
          ? postsInfo.map((post) => (
            <PostItem
              key={post.id}
              title={post.title}
              body={post.body}
              name={post.name}
              userName={post.userName}
            />
          ))
          : <StyledEmptyMessage>К сожалению, ничего не найдено</StyledEmptyMessage>
      }
    </StyledList>
  )
}
