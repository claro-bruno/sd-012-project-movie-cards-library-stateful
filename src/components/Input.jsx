import React from 'react';
import PropTypes from 'prop-types';

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

Input.defaultProps = {
  checked: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.node.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  inputID: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default Input;
