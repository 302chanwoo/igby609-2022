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
    thumbnail: {
      childImageSharp: { gatsbyImageData: IGatsbyImageData };
    };
    hero_image: {
      childImageSharp: { gatsbyImageData: IGatsbyImageData };
    };
  };
}
