import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { labelId,
      labelText,
      inputId,
      inputType,
      valueInput,
      onChangeInput,
    } = this.props;
    return (
      <label data-testid={ labelId } htmlFor={ inputId }>
        { labelText }
        <input
          data-testid={ inputId }
          type={ inputType }
          value={ valueInput }
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
  valueInput: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Input;
