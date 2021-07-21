import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const {
      inputId,
      value,
      onChange,
      labelDescription,
    } = this.props;

    return (
      <label data-testid={ `${inputId}-label` } htmlFor={ inputId }>
        { labelDescription }
        <input
          type="number"
          id={ inputId }
          data-testid={ inputId }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  inputId: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  labelDescription: PropTypes.string,
};

InputNumber.defaultProps = {
  labelDescription: '',
};

export default InputNumber;
