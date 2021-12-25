import { graphql, useStaticQuery } from 'gatsby';
import { PictureData } from '../../types';

export const useMainListQuery = () => {
  const pictures: PictureData = useStaticQuery(graphql`
    query MainQuery {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { categories: { in: ["main"] } } }
      ) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            categories
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
  `);
  return {
    pictures,
  };
};
