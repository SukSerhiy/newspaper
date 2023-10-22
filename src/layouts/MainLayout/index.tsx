import { FC } from 'react';
import Header from '../shared/Header';
import { IMainLayout } from './types';

const MainLayout: FC<IMainLayout> = ({ children, className = '' }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className={className}>{children}</main>
    </div>
  );
};

export default MainLayout;
