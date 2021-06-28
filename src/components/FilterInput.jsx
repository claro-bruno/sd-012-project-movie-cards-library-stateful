import React, { Component } from 'react';

export default class FilterInput extends Component {
  render() {
    const { type,
      label,
      name,
      labeltestid,
      fieldtestid,
      onChange,
      value,
      checked } = this.props;

    return (
      <label htmlFor={ name } data-testid={ labeltestid }>
        {label}
        <input
          type={ type }
          name={ name }
          data-testid={ fieldtestid }
          onChange={ onChange }
          value={ value }
          checked={ checked }
        />
      </label>
    );
  }
}
