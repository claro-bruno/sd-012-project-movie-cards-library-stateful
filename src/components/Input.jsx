import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      dataTestidLabel,
      textLabel,
      dataTestid,
      type,
      name,
      value = '',
      checked,
      onChange,
    } = this.props;
    return (
      <label htmlFor={ dataTestid } data-testid={ dataTestidLabel }>
        { textLabel }
        <input
          data-testid={ dataTestid }
          id={ dataTestid }
          type={ type }
          name={ name }
          value={ value }
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  dataTestidLabel: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
