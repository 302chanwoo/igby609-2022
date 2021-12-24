import { graphql, useStaticQuery } from 'gatsby';
import { PictureData } from '../../types';

export const useDigitalPaintingListQuery = () => {
  const pictures: PictureData = useStaticQuery(graphql`
    query DigitalPaintingQuery {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { categories: { in: ["digital-painting"] } } }
      ) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            categories
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
