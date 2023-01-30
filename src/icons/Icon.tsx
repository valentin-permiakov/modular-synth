import React from 'react';
import { DropdownIcon } from './DropdownIcon';
import { SawtoothIcon } from './SawtoothIcon';
import { SineIcon } from './SineIcon';
import { SquareIcon } from './SquareIcon';
import { TriangleIcon } from './TriangleIcon';

export enum EIcons {
  dropdownIcon = 'DropdownIcon',
  sineIcon = 'SineIcon',
  sawtoothIcon = 'SawtoothIcon',
  triangleIcon = 'TriangleIcon',
  squareIcon = 'SquareIcon',
}

interface IIconProps {
  name: EIcons;
  size?: number;
}

export const Icon = ({ name, size = 16 }: IIconProps) => {
  const icons = {
    DropdownIcon: <DropdownIcon width={size} height={10} />,
    SineIcon: <SineIcon width={size} height={size} />,
    SawtoothIcon: <SawtoothIcon width={size} height={size} />,
    TriangleIcon: <TriangleIcon width={size} height={size} />,
    SquareIcon: <SquareIcon width={size} height={size} />,
  };
  return <span style={{ width: size, height: size }}>{icons[name]}</span>;
};
