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
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 400)
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
