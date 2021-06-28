import React, { Component } from 'react';

export default class FilterInput extends Component {
  render() {
    const {
      type,
      label,
      id,
      labeltestid,
      fieldtestid,
      onChange,
      value,
      checked } = this.props;

    return (
      <label htmlFor={ id } data-testid={ labeltestid }>
        {label}
        <input
          type={ type }
          id={ id }
          data-testid={ fieldtestid }
          onChange={ onChange }
          value={ value }
          checked={ checked }
        />
      </label>
    );
  }
}
