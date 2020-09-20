import React from 'react';
import { Input } from '../../UI/Input/Input';
import { PostsList } from '../PostsList/PostsList';
import { StyledPosts } from './styled';

export const Posts: React.FunctionComponent = () => {
  return (
    <StyledPosts>
      <Input />
      <PostsList />
    </StyledPosts>
  );
}
