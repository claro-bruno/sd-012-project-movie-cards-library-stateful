import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      labelId,
      innerText,
      inputId,
      nameInput,
      typeInput,
      valueInput,
      onChangeInput,
    } = this.props;
    return (
      <label data-testid={ labelId } htmlFor={ inputId }>
        { innerText }
        <input
          data-testid={ inputId }
          name={ nameInput }
          type={ typeInput }
          value={ valueInput }
          onChange={ onChangeInput }
        />
      </label>
    );
  }
}

Input.propTypes = {
  labelId: PropTypes.string.isRequired,
  innerText: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  nameInput: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
  valueInput: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Input;
