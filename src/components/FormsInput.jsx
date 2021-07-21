import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  render() {
    const {
      labelTestId,
      labelText,
      id,
      type,
      value,
      onChangeCallback,
      inputTestId,
    } = this.props;

    return (
      <div>
        <label htmlFor={ id } data-testid={ labelTestId }>
          { labelText }
          <input
            id={ id }
            type={ type }
            value={ value }
            data-testid={ inputTestId }
            onChange={ onChangeCallback }
          />
        </label>
      </div>
    );
  }
}

FormInput.propTypes = {
  labelTestId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  inputTestId: PropTypes.string.isRequired,
};

export default FormInput;
