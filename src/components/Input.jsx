import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      inputId,
      inputName,
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
          name={ inputName }
        />
      </label>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  inputName: PropTypes.string,
  onChange: PropTypes.func,
  typeInput: PropTypes.string,
  testIdLabel: PropTypes.string,
  testIdInput: PropTypes.string,
  inputId: PropTypes.string,
  labelText: PropTypes.string,
  checked: PropTypes.bool,
};

Input.defaultProps = {
  value: '',
  inputName: '',
  onChange: console.log,
  typeInput: '',
  testIdLabel: '',
  testIdInput: '',
  inputId: '',
  labelText: '',
  checked: false,
};

export default Input;
