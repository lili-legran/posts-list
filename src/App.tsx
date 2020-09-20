import React from 'react';
import { Layout } from './hoc/Layout';
import { Posts } from './components/Posts/Posts';

const App: React.FunctionComponent = () => {
  return (
    <Layout>
      <Posts />
    </Layout>
  )
};

export default App;
