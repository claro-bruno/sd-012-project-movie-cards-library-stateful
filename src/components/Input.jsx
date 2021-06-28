import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { props } = this;
    const {
      labelDataTestId,
      inputLabel,
      inputDataTestId,
      inputType,
      inputValue,
      inputOnChange,
      inputChecked,
    } = props;
    return (
      <label htmlFor={ inputDataTestId } data-testid={ labelDataTestId }>
        { inputLabel }
        <input 
          data-testid={ inputDataTestId }
          type={ inputType }
          value={ inputValue }
          onChange={ inputOnChange }
          checked={ inputChecked }
        />
      </label>
    );
  }
}

Input.propTypes = {
  labelDataTestId: PropTypes.string,
  inputLabel: PropTypes.string,
  inputDataTestId: PropTypes.string,
  inputType: PropTypes.string,
  inputValue: PropTypes.string,
  inputOnChange: PropTypes.func,
  inputChecked: PropTypes.bool,
}



export default Input;
