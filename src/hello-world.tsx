import React from 'react';

interface Props {
  /** Color of the text */
  color: string;
}

export function HelloWorld({ color }: Props) {
  return <div style={{ color }}>Hello world!</div>;
}
