import React, { ReactElement } from 'react';
import NavBar from '@components/common/navBar/NavBar';
import appConfig from '../../../appConfig.json';

interface Props {
  children: React.ReactElement;
}

export default function MainLayout({ children }: Props): ReactElement {
  return (
    <div>
      <NavBar title={appConfig.name} brandImageUrl={appConfig.brandImageUrl} />
      {children}
    </div>
  );
}
