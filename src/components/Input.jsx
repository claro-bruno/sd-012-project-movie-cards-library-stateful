import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      inputType,
      inputLabelName,
      inputName,
      inputValue,
      handleChange,
      id,
    } = this.props;

    if (inputType === 'textarea') {
      return (
        <label htmlFor={ inputName } data-testid={ `${id}-input-label` }>
          { inputLabelName }
          <textarea
            name={ inputName }
            value={ inputValue }
            onChange={ handleChange }
            data-testid={ `${id}-input` }
          />
        </label>
      );
    }
    return (
      <label htmlFor={ inputType } data-testid={ `${id}-input-label` }>
        { inputLabelName }
        <input
          type={ inputType }
          name={ inputName }
          value={ inputValue }
          onChange={ handleChange }
          data-testid={ `${id}-input` }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  inputLabelName: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
