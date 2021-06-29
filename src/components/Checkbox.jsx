import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const { label, type, name, checked, dataTestId, onChange } = this.props;

    return (
      <label htmlFor={ name } data-testid={ `${dataTestId}-label` }>
        <input
          type={ type }
          id={ name }
          name={ name }
          checked={ checked }
          onChange={ onChange }
          data-testid={ dataTestId }
        />
        { label }
      </label>
    );
  }
}

Checkbox.propTypes = PropTypes.exact({
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}).isRequired;

export default Checkbox;
