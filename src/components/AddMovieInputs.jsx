import React, { Component } from 'react';

export default class AddMovieInputs extends Component {
  render() {
    const { value, onChange, name, inner, id } = this.props;
    return (
      <label data-testid={ `${id}-label` } htmlFor={ `${id}` }>
        {inner}
        <input
          value={ value }
          data-testid={ `${id}` }
          onChange={ onChange }
          name={ name }
          id={ `${id}` }
        />
      </label>
    );
  }
}
