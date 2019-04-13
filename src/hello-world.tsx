import React from "react";

export class HelloWorld extends React.Component<any, any> {
  render() {
    return <div style={{ color: this.props.color }}>Hello world!</div>;
  }
}
