import React, { Component } from 'react';

class TextInput extends Component {
  render() {
    const { id, label, name, value, handleChange} = this.props
    return(
      <label htmlFor={`${id}-input`} data-testid={`${id}-input-label`}>
          {label}
          <input
            type="text"
            data-testid={`${id}-input`}
            name={name}
            value={ value }
            onChange={ handleChange }
          />
        </label>
    );
  }
}

export default TextInput;