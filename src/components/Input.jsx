import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      testID,
      labelName,
      inputName,
      inputValue,
      inputType = 'text',
      inputEvent,
    } = this.props;

    if (inputType === 'textarea') {
      return (
        <label htmlFor={ inputName } data-testid={ `${testID}-input-label` }>
          { labelName }
          <textarea
            value={ inputValue }
            name={ inputName }
            onChange={ inputEvent }
            required
            data-testid={ `${testID}-input ` }
          />
        </label>
      );
    }
    return (
      <label htmlFor={ inputName } data-testid={ `${testID}-input-label` }>
        { labelName }
        <input
          value={ inputValue }
          name={ inputName }
          onChange={ inputEvent }
          type={ inputType }
          required
          data-testid={ `${testID}-input` }
        />
      </label>
    );
  }
}

Input.propTypes = {
  testID: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  inputEvent: PropTypes.func.isRequired,
};

export default Input;
