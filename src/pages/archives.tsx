import React from 'react';
import Layout from 'components/common/Layout';
import Seo from 'components/common/Seo';
import Archives from 'components/Archives';

const PencilPage = () => {
  return (
    <Layout>
      <Seo title="archives" />
      <Archives />
    </Layout>
  );
};

export default PencilPage;
