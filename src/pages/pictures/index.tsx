import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Node } from '../../types';

interface Props {
  data: {
    allMdx: {
      nodes: Node[];
    };
  };
}
const PicturesPage = ({ data }: Props) => {
  return (
    <div>
      Pictures
      {data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <h2>
            <Link to={`/pictures/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
          <FeaturedImage
            image={
              node.frontmatter.featuredImage.childImageSharp.gatsbyImageData
            }
            alt="Post Item Image"
          />
        </article>
      ))}
    </div>
  );
};
const FeaturedImage = styled(GatsbyImage)`
  overflow: hidden;
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

export default PicturesPage;

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`;
