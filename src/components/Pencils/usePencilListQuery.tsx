import { graphql, useStaticQuery } from 'gatsby';
import { PictureData } from '../../types';

export const usePencilListQuery = () => {
  const pictures: PictureData = useStaticQuery(graphql`
    query PencilQuery {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { categories: { in: ["pencil"] } } }
      ) {
        nodes {
          frontmatter {
            date(formatString: "YYYY.MM.DD")
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
