import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      name,
      testid,
      labelText,
      inputText,
      inputType,
      callback,
    } = this.props;
    const labelid = `${testid}-label`;
    return (
      <label
        htmlFor={ name }
        data-testid={ labelid }
      >
        { labelText }
        <input
          id={ name }
          data-testid={ testid }
          type={ inputType }
          value={ inputText }
          onChange={ callback }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Input;
