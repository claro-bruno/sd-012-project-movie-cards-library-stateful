import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, value, testIdLabel, labelText, testid, onChange } = this.props;
    return (
      <label data-testid={ testIdLabel } htmlFor={ testid }>
        { labelText }
        <input
          name={ name }
          value={ value }
          data-testid={ testid }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  testIdLabel: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
