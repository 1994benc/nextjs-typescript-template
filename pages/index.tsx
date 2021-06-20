import React, { FC } from 'react';
import Head from 'next/head';
import MainLayout from '@common/components/mainLayout/MainLayout';
import appConfig from '../appConfig.json';

const Home: FC = () => {
  return (
    <MainLayout appName={appConfig.name} brandImageUrl={appConfig.brandImageUrl}>
      <Head>
        <title>{appConfig.name}</title>
      </Head>
    </MainLayout>
  );
};

export default Home;
