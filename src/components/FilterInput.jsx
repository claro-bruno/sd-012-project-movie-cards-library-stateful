import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

FilterInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  labeltestid: PropTypes.string.isRequired,
  fieldtestid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};
