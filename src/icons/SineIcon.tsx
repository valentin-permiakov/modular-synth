import React from 'react';

interface ISineIcon {
  height?: number;
  width?: number;
}

export const SineIcon = ({ width, height }: ISineIcon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <path
        stroke="none"
        fill="white"
        d="M22 28c-4 0-5.586-5.652-7.266-11.625C13.52 12.055 12 6.668 10 6.668c-4.52 0-4.668 9.238-4.668 9.332H2.668c0-.492.078-12 7.332-12 4 0 5.613 5.668 7.293 11.652 1.148 4.082 2.707 9.68 4.707 9.68 4.586 0 4.707-9.238 4.707-9.332h2.668c0 .492-.082 12-7.375 12Zm0 0"
      />
    </svg>
  );
};
