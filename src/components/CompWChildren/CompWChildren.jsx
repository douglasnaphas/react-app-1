import React from "react";

class CompWChildren extends React.Component {
  render() {
    return (
      <div>
        My children:
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default CompWChildren;
