import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
    render() {
      const {
        inputId,
        inputTestId,
        inputLabel,
        inputLabelTestId,
        inputType,
        inputName,
        inputValue,
        onChangeInput,
        inputIsRequired,
        inputMaxlength,
    } = this.props;    


    return (
        <label htmlFor={ inputId } data-testid={ inputLabelTestId }>
          { inputLabel}
          <input
             id={ inputId } 
             data-testid={ inputTestId }
             type={ inputType }
             name={ inputName }
             value={ inputValue }
             onChange={ onChangeInput }
             required={ inputIsRequired }
             maxLength={ inputMaxlength }
            />
        </label>
    );
  }

}

Input.propTypes = {
    inputId: PropTypes.string.isRequired,
    inputTestId: PropTypes.string,
    inputLabel: PropTypes.string.isRequired,
    inputLabelTestId: PropTypes.string,
    inputType: PropTypes.string,
    inputName: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    onChangeInput: PropTypes.func.isRequired,
    inputIsRequired: PropTypes.bool,
    inputMaxlength: PropTypes.number, 
}

Input.defaultProps = {
    inputType: 'text',
    inputTestId: '',
    inputLabelTestId: '',
    inputIsRequired: true,
    inputMaxlength: 1000,
  };

export default Input;
