import React from 'react';

interface ISquareIcon {
  height?: number;
  width?: number;
}

export const SquareIcon = ({ width, height }: ISquareIcon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <path
        stroke="none"
        fill="white"
        d="M2.668 2.668V16h2.664V5.332h9.336v24h14.664V16h-2.664v10.668h-9.336v-24Zm0 0"
      />
    </svg>
  );
};
