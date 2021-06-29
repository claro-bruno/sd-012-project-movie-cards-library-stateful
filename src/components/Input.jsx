import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      dataTestidLabel,
      textLabel,
      dataTestid,
      type,
      value,
      onChange,
      isRequired = true,
    } = this.props;
    return (
      <label htmlFor={ dataTestid } data-testid={ dataTestidLabel }>
        { textLabel }
        <input
          data-testid={ dataTestid }
          id={ dataTestid }
          type={ type }
          value={ value }
          onChange={ onChange }
          isRequired={ isRequired }
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool.isRequired,
};

export default Input;
