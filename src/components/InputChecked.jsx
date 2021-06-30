import React from 'react';
import PropTypes from 'prop-types';

class InputChecked extends React.Component {
  render() {
    const {
      labelText,
      labelId,
      inputId,
      inputName,
      inputType,
      checkedInput,
      onChangeInput,
    } = this.props;
    return (
      <label data-testid={ labelId } htmlFor={ inputId }>
        { labelText }
        <input
          data-testid={ inputId }
          type={ inputType }
          name={ inputName }
          checked={ checkedInput }
          onChange={ onChangeInput }
        />
      </label>
    );
  }
}

InputChecked.propTypes = {
  labelId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  checkedInput: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default InputChecked;
