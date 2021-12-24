import React from 'react';
import Layout from 'components/common/Layout';
import Seo from 'components/common/Seo';
import Pencils from 'components/Pencils';

const PencilPage = () => {
  return (
    <Layout>
      <Seo title="pencil" />
      <Pencils />
    </Layout>
  );
};

export default PencilPage;
