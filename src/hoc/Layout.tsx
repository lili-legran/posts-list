import React from 'react';
import { Header } from '../components/Header/Header';

export const Layout: React.FunctionComponent = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      { children }
    </>
  )
}
