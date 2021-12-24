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
        thumbnail: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
        hero_image: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      };
    };
  };
}
const PicturesPost = ({ data }: Props) => {
  console.log('detail', data);
  const { title, thumbnail } = data.mdx.frontmatter;
  const imageSrc =
    thumbnail.childImageSharp.gatsbyImageData.images.fallback?.src;
  return (
    <Layout>
      <Seo title={title} image={imageSrc} />
      <div css={containerStyle}>
        <h2 css={titleStyle}>{title}</h2>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>

      {/* <GatsbyImage
        image={data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData}
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
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;
