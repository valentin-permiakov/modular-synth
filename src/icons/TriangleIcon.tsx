import React from 'react';

interface ITriangleIcon {
  height?: number;
  width?: number;
}

export const TriangleIcon = ({ width, height }: ITriangleIcon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <path
        stroke="none"
        fill="white"
        d="m29.332 16-6.664 13.332L9.465 8.055 5.652 16H2.668L9.332 2.668l13.203 21.277L26.348 16Zm0 0"
      />
    </svg>
  );
};
