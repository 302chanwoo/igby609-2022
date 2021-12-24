import React from 'react';
import { css } from '@emotion/react';
import { Node } from '../../types';
import ImageItem from './ImageItem';
interface Props {
  list: Node[];
}
const ImageList = ({ list }: Props) => {
  return (
    <div css={gridStyle}>
      {list.map(node => (
        <ImageItem key={node.id} node={node} />
      ))}
    </div>
  );
};

const gridStyle = css`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 50px;
  @media (max-width: 640px) {
    row-gap: 30px;
  }
`;

export default ImageList;
