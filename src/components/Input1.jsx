import React, { Component } from 'react';

class Input1 extends Component {
  render() {
    // const { text, name, value, onChange } = this.props;

    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          id="title-input"
          data-testid="title-input"
        />
      </label>
    );
  }
}

export default Input1;
