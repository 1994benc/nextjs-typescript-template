import React, { ReactElement } from 'react';
import NavBar from '@common/components/navBar/NavBar';

interface Props {
  children: React.ReactElement;
  brandImageUrl: string;
  appName: string;
}

export default function MainLayout({ children, brandImageUrl, appName }: Props): ReactElement {
  return (
    <div>
      <NavBar title={appName} brandImageUrl={brandImageUrl} />
      {children}
    </div>
  );
}
