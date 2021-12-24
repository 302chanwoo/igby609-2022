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
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 30px;
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default ImageList;
