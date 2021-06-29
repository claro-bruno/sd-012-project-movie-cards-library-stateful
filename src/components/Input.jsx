import React, { Component } from 'react';

class Input extends Component {
  render() {
    const {
      inputType, inputName, inputValue,
      inputOnChange } = this.props;
    return (
      <input
        type={ inputType }
        name={ inputName }
        value={ inputValue }
        onChange={ inputOnChange }
      />
    );
  }
}

export default Input;
