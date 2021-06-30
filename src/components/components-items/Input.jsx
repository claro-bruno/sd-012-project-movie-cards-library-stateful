import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      inputType,
      inputLabel,
      onChangeInput,
      inputValue,
      inputDataTestId,
      inputLabelId,
      name } = this.props;
    return (
      <label htmlFor={ inputLabelId } data-testid={ inputLabelId }>
        {inputLabel}
        <input
          data-testid={ inputDataTestId }
          id={ inputLabelId }
          type={ inputType }
          value={ inputValue }
          onChange={ onChangeInput }
          name={ name }
        />
      </label>
    );
  }
}

Input.propTypes = PropTypes.shape({
  inputType: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputDataTestId: PropTypes.string.isRequired,
  inputLabelId: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}).isRequired;

export default Input;
