import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      labelText,
      labelId,
      inputId,
      inputType,
      inputValue,
      onChangeInput,
    } = this.props;
    return (
      <label data-testid={ labelId } htmlFor={ inputId }>
        { labelText }
        <input
          data-testid={ inputId }
          type={ inputType }
          value={ inputValue }
          onChange={ onChangeInput }
        />
      </label>
    );
  }
}

Input.propTypes = {
  labelId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Input;
