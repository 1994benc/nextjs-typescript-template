import React from 'react';
import { render, screen } from '@testing-library/react';
import MainLayout from './MainLayout';

describe('Main layout component', () => {
  test('should contain child components', () => {
    const childTestId = 'test-child';
    const children = <div data-testid={childTestId}>Children</div>;
    render(
      <MainLayout appName="Name" brandImageUrl="">
        {children}
      </MainLayout>
    );
    expect(screen.getByTestId(childTestId)).toBeInTheDocument();
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  test('should contain the nav bar component', () => {
    const children = <div>Children</div>;
    render(
      <MainLayout appName="App name" brandImageUrl="">
        {children}
      </MainLayout>
    );
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByText('App name')).toBeInTheDocument();
  });
});
