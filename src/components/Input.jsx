import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      inputLabelId,
      inputAtributeLabel,
      inputText,
      inputValue,
      inputOnChange,
      inputAtribute,
      inputType,
    } = this.props;
    return (
      <label htmlFor={ inputLabelId } data-testid={ inputAtributeLabel }>
        {inputText}
        <input
          inputType={ inputType }
          id={ inputLabelId }
          value={ inputValue }
          onChange={ inputOnChange }
          data-testid={ inputAtribute }
        />
      </label>
    );
  }
}

Input.propTypes = {
  inputLabelId: PropTypes.string.isRequired,
  inputAtributeLabel: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputOnChange: PropTypes.string.isRequired,
  inputAtribute: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
};

export default Input;
