import * as React from 'react';
import { css } from '@emotion/react';
import Layout from '../components/common/Layout';
import Seo from '../components/common/Seo';

const NotFoundPage = () => (
  <Layout>
    <Seo title="Not found" />
    <div css={containerStyle}>
      <h3>Not Found</h3>
    </div>
  </Layout>
);

const containerStyle = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  h3 {
    font-family: Abel, sans-serif;
    font-size: 45px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export default NotFoundPage;
