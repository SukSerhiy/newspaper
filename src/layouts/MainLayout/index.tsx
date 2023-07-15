import { FC } from 'react';
import Header from '../shared/Header';
import { IMainLayout } from './types';

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
