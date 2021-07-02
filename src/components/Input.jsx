import React from 'react';
import PropType from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      label,
      inputName,
      inputType,
      inputValue,
      onChangeInput,
      inputID,
    } = this.props;

    return (
      <label htmlFor={ `${inputID}` } data-testid={ `${inputID}-label` }>
        { label }
        <input
          name={ inputName }
          type={ inputType }
          value={ inputValue }
          onChange={ onChangeInput }
          data-testid={ inputID }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropType.string.isRequired,
  inputName: PropType.string.isRequired,
  inputType: PropType.string.isRequired,
  inputValue: PropType.func.isRequired,
  onChangeInput: PropType.func.isRequired,
  inputID: PropType.string.isRequired,
};

export default Input;
