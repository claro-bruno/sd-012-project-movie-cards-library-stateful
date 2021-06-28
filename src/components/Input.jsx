import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      inputId,
      testIdInput,
      testIdLabel,
      typeInput,
      value,
      onChange,
      labelText,
      checked,
    } = this.props;
    return (
      <label
        htmlFor={ inputId }
        data-testid={ testIdLabel }
      >
        { labelText }
        <input
          type={ typeInput }
          id={ inputId }
          value={ value }
          checked={ checked }
          onChange={ onChange }
          data-testid={ testIdInput }
        />
      </label>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
  testIdLabel: PropTypes.string.isRequired,
  testIdInput: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
};

export default Input;
