import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar component', () => {
  test('should render title correctly', () => {
    const title = 'Test title';
    render(<NavBar title={title} brandImageUrl="" />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test('should display a brand image', () => {
    const title = 'Test title';
    const brandImageUrl = 'https://picsum.photos/200/300';
    render(<NavBar title={title} brandImageUrl={brandImageUrl} />);
    const brandImage = screen.getByTestId('brandImage');
    expect(brandImage).toBeInTheDocument();
    expect(brandImage.getAttribute('src')).toBe(brandImageUrl);
  });
});
