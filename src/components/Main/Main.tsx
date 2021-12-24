import React from 'react';
import { css } from '@emotion/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { useMainListQuery } from './useMainListQuery';
import ImageList from './ImageList';

const Main = () => {
  const { pictures } = useMainListQuery();
  const {
    allMdx: { nodes },
  } = pictures;
  console.log('pictures', pictures);
  return (
    <div css={containerStyle}>
      <ImageList list={nodes} />
    </div>
  );
};

const containerStyle = css`
  margin: 0 auto;
  padding: 100px 20px;
  max-width: 1024px;
  @media screen and (max-width: 640px) {
    padding: 50px 20px;
  }
`;

export default Main;
