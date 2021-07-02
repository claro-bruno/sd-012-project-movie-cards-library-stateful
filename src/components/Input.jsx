import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, type, name, value, onChange, dataLabel, dataInput } = this.props;
    return (
      <label htmlFor={ name } data-testid={ dataLabel }>
        { label }
        <input
          data-testid={ dataInput }
          name={ name }
          type={ type }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataInput: PropTypes.string.isRequired,
  dataLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func.isRequired,
};

export default Input;
