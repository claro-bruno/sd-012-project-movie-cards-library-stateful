import React, { Component } from 'react';

class TextInput extends Component {
  render() {
    const { id, label, name, value, handleChange} = this.props
    return(
        <label htmlFor={`${id}-input`} data-testid={`${id}-input-label`}>
        {label}
        <select
          data-testid={`${id}-input`}
          name={name}
          value={ value }
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action" selected>
            Ação
          </option>
          <option data-testid="genre-option" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

export default TextInput;