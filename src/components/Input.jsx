import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      label,
      dataTestid,
      name,
      type,
      value,
      onChange,
    } = this.props;

    return (
      <label
        htmlFor="basicInput"
        data-testid="text-input-label"
      >
        { label }
        <input
          id="basicInput"
          name={ name }
          type={ type }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestid }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  labelDataTestid: PropTypes.string,
  dataTestid: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Input;
