import React from 'react';
import {
  StyledItem,
  StyledTitle,
  StyledUser,
  StyledBody
} from './styled';
import { PostItemProps } from './types';

export const PostItem = (props: PostItemProps) => {
  const { title, body, name, userName } = props;
  return (
    <StyledItem>
      <StyledTitle>{title}</StyledTitle>
      <StyledUser>
        <span>{userName}</span>
        <span>{name}</span>
      </StyledUser>
      <StyledBody>{body}</StyledBody>
    </StyledItem>
  )
}
