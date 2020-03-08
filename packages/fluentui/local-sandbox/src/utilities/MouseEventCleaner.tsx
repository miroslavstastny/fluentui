import * as React from 'react';

export class MouseEventCleaner extends React.PureComponent<{
  mainWindow: any;
}> {
  private divRef = React.createRef<HTMLDivElement>();
  private siblingEl = React.createRef<HTMLDivElement>();

  public componentDidMount() {
    const { document } = this.props.mainWindow;
    const attachedNode = document.createElement('div');
    // istanbul ignore else
    if (this.divRef.current) {
      this.divRef.current.appendChild(attachedNode);
      attachedNode.dispatchEvent(
        new MouseEvent('mouseout', {
          bubbles: true,
          cancelable: true,
          relatedTarget: this.siblingEl.current
        })
      );
    }
  }

  public render() {
    return (
      <div ref={this.divRef}>
        <div ref={this.siblingEl} onMouseEnter={() => {}} />
      </div>
    );
  }
}
