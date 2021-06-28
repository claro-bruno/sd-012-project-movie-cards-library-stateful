import React, { Component } from 'react';

class NumberInput extends Component {
  render() {
    const { id, label, name, value, handleChange} = this.props
    return(
      <label htmlFor={`${id}-input`} data-testid={`${id}-input-label`}>
          {label}
          <input
            type="number"
            data-testid={`${id}-input`}
            name={name}
            value={ value }
            onChange={ handleChange }
          />
        </label>
    );
  }
}

export default NumberInput;