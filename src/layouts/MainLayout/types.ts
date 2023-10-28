import { ReactNode } from 'react';

export interface IMainLayout {
  children: ReactNode | ReactNode[];
  className?: string;
}
