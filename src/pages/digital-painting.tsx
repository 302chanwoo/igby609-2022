import React from 'react';
import Layout from 'components/common/Layout';
import Seo from 'components/common/Seo';
import DigitalPaintings from 'components/DigitalPaintings';

const DigitalPaintingPage = () => {
  return (
    <Layout>
      <Seo title="digital painting" />
      <DigitalPaintings />
    </Layout>
  );
};

export default DigitalPaintingPage;
