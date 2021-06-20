import { ReactElement } from 'react';

interface Props {
  title: string;
  brandImageUrl: string;
}

export default function NavBar({ title, brandImageUrl }: Props): ReactElement {
  return (
    <div data-testid="navbar">
      <div>
        <img src={brandImageUrl} data-testid="brandImage" alt={title} />
        <div>{title}</div>
      </div>
    </div>
  );
}
