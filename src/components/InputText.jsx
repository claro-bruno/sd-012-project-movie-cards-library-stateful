import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    const { text, name, value, onChange, type } = this.props;
    const id = `${name}-input`;
    const dataTestId = id;
    const htmlFor = id;
    const dataTestLabelId = `${id}-label`;

    return (
      <label
        htmlFor={ htmlFor }
        data-testid={ dataTestLabelId }
      >
        { text }
        <input
          name={ name }
          id={ id }
          type={ type }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestId }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  htmlFor: PropTypes.string,
  dataTestId: PropTypes.string,
  dataTestLabelId: PropTypes.string,
}.isRequired;

export default InputText;
