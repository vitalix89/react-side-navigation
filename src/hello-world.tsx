import React, { ReactNode } from 'react';

export enum Color {
  Blue = 'blue',
  Black = 'black',
  Red = 'red',
  Transparent = 'transparent',
}

interface Props {
  children: ReactNode;
  /** Hello */
  color?: Color;
}

export function HelloWorld({ children, color }: Props) {
  return <div style={{ color }}>{children}</div>;
}

export interface Link {
  name: string;
  url: string;
}
interface MenuProps {
  links: Link[];
}

function createLink(link: Link) {
  return (
    <li key={link.name}>
      <a href={link.url}>{link.name}</a>
    </li>
  );
}

export function Menu({ links }: MenuProps) {
  return (
    <div>
      <h1>Menu</h1>
      <ul>{links.map(createLink)}</ul>
    </div>
  );
}
