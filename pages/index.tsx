import React, { FC } from 'react';
import Head from 'next/head';
import MainLayout from '@components/common/mainLayout/MainLayout';
import appConfig from '../appConfig.json';

const Home: FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>{appConfig.name}</title>
      </Head>
    </MainLayout>
  );
};

export default Home;
