import React from 'react';

interface ISawtoothIcon {
  height?: number;
  width?: number;
}

export const SawtoothIcon = ({ width, height }: ISawtoothIcon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <path
        stroke="none"
        fill="white"
        d="M14.668 29.332V9.105l-12 12.227v-3.773L17.332 2.668v20.227l12-12.227v3.773Zm0 0"
      />
    </svg>
  );
};
