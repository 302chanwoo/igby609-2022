import React from 'react';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { MDXProvider } from '@mdx-js/react';
import Layout from 'components/common/Layout';
import Seo from 'components/common/Seo';

interface Props {
  data: {
    mdx: {
      id: string;
      body: string;
      slug: string;
      frontmatter: {
        date: string;
        title: string;
        featuredImage: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      };
    };
  };
}
const PicturesPost = ({ data }: Props) => {
  const { title, featuredImage } = data.mdx.frontmatter;
  const imageSrc =
    featuredImage.childImageSharp.gatsbyImageData.images.fallback?.src;
  return (
    <Layout>
      <Seo title={title} image={imageSrc} />
      <div css={containerStyle}>
        <h2 css={titleStyle}>{title}</h2>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>

      {/* <GatsbyImage
        image={data.mdx.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
        alt=""
      /> */}
      {/* <div>
        <MDXProvider components={{}}>{data.mdx.body}</MDXProvider>
      </div> */}
    </Layout>
  );
};

const containerStyle = css`
  margin: 0 auto;
  max-width: 1024px;
  padding: 40px 20px 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const titleStyle = css`
  margin-bottom: 50px;
  text-align: center;
  font-family: Abel, sans-serif;
  font-size: 1.5rem;
`;

export default PicturesPost;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;
