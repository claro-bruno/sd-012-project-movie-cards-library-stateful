import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const { label, type, name, checked, onChange } = this.props;

    return (
      <label htmlFor={ name } data-testid={ `${type}-input-label` }>
        { label }
        <input
          type={ type }
          id={ name }
          name={ name }
          checked={ checked }
          onChange={ onChange }
          data-testid={ `${type}-input` }
        />
      </label>
    );
  }
}

Checkbox.propTypes = PropTypes.exact({
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}).isRequired;

export default Checkbox;
