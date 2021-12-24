import React from 'react';
import { css } from '@emotion/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { usePencilListQuery } from './usePencilListQuery';
import ImageList from './ImageList';

const Pencils = () => {
  const { pictures } = usePencilListQuery();
  const {
    allMdx: { nodes },
  } = pictures;
  console.log('pictures', pictures);
  return (
    <div css={containerStyle}>
      <h2 css={titleStyle}>PENCIL</h2>
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
const titleStyle = css`
  margin-bottom: 50px;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.5);
  @media screen and (max-width: 640px) {
    margin-bottom: 20px;
    font-size: 1rem;
  }
`;

export default Pencils;
