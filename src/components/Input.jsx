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
      checked,
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
          checked={ checked }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropType.string.isRequired,
  inputName: PropType.string.isRequired,
  inputType: PropType.string.isRequired,
  inputValue: PropType.node.isRequired,
  onChangeInput: PropType.func.isRequired,
  inputID: PropType.string.isRequired,
  checked: PropType.bool.isRequired,
};

export default Input;
