import React from 'react';

export class HelloWorld extends React.Component<any, any> {
  public render() {
    return <div style={{ color: this.props.color }}>Hello world!</div>;
  }
}
