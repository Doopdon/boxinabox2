
import React, { Component } from 'react';

class TextComponent extends Component {
  
  render() {
    return (
      <div className="outer-container">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default TextComponent;
