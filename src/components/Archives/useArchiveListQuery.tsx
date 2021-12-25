import { graphql, useStaticQuery } from 'gatsby';
import { PictureData } from '../../types';

export const useArchiveListQuery = () => {
  const pictures: PictureData = useStaticQuery(graphql`
    query ArchivesQuery {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
