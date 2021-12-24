import React from 'react';
import Layout from 'components/common/Layout';
import Seo from 'components/common/Seo';
import Main from 'components/Main';

const MainPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Main />
    </Layout>
  );
};

export default MainPage;
