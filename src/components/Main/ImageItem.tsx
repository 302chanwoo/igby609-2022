import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { Node } from '../../types';

interface Props {
  node: Node;
}
const ImageItem = ({ node }: Props) => {
  return (
    <div key={node.id} css={itemStyle}>
      <Link to={`/pictures/${node.slug}`} css={linkStyle}>
        <FeaturedImage
          image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt="Post Item Image"
        />
      </Link>
      <div css={infoStyle}>
        <Link to={`/pictures/${node.slug}`} css={titleStyle}>
          <h4>{node.frontmatter.title}</h4>
        </Link>
        <p css={dateStyle}>{node.frontmatter.date}</p>
      </div>
    </div>
  );
};

const itemStyle = css``;

const linkStyle = css`
  display: block;
`;
const FeaturedImage = styled(GatsbyImage)`
  overflow: hidden;
  width: 100%;
  height: 200px;
  border-radius: 5px;
  object-fit: cover;
  @media (max-width: 640px) {
    height: 100px;
  }
`;
const infoStyle = css`
  padding: 6px 0 0;
  overflow: hidden;
  display: block;
`;
const titleStyle = css`
  text-overflow: ellipsis;
  -webkit-line-clamp: 1; //원하는 라인수
  -webkit-box-orient: vertical;
  line-height: 20px;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;
  height: 20px;
  word-break: break-all;
  font-family: Abel, sans-serif;
  font-size: 1.1rem;
`;
const dateStyle = css`
  text-align: left;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
`;

export default ImageItem;
