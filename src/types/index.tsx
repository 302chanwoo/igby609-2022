import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface PictureData {
  allMdx: {
    nodes: Node[];
  };
}

export interface Node {
  id: string;
  body: string;
  slug: string;
  frontmatter: {
    date: string;
    title: string;
    categories: [];
    featuredImage: {
      childImageSharp: { gatsbyImageData: IGatsbyImageData };
    };
  };
}
