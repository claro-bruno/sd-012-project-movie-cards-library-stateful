import React from 'react';
import PropTypes from 'prop-types';

class TypeNumber extends React.Component {
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

TypeNumber.propTypes = {
  inputId: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  labelDescription: PropTypes.string,
};

TypeNumber.defaultProps = {
  labelDescription: '',
  value: '0',
};

export default TypeNumber;
