import React from 'react';
import PropTypes from 'prop-types';

class InputChecked extends React.Component {
  render() {
    const {
      labelText,
      labelId,
      inputId,
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
  inputType: PropTypes.string.isRequired,
  checkedInput: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default InputChecked;
