import type { ReactElement } from 'react';

export interface Farm {
  id: number;
  name: string;
  duration: number;
  dailyReturn: number;
  totalReturn: number;
  image: string;
}

export interface NavItem {
  name: string;
  // Fix: Use ReactElement type for the icon property.
  icon: ReactElement;
}