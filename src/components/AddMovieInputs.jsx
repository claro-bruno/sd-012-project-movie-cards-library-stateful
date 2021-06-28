import React, { Component } from 'react';

export default class AddMovieInputs extends Component {
  render() {
    const { value, onChange, name, inner } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ `${name}-input` }>
        {inner}
        <input
          value={ value }
          data-testid={ `${name}-input` }
          onChange={ onChange }
          name={ name }
          id={ `${name}-input` }
        />
      </label>
    );
  }
}
