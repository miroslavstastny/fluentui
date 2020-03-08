import * as React from 'react';

export class NestedUpdateCleaner extends React.PureComponent {
  public state = {
    mounted: false
  };

  public componentDidMount() {
    // Trigger a nested update by calling `setState` inside `componentDidMount`
    this.setState({ mounted: true });
  }

  public render() {
    return <div />;
  }
}
