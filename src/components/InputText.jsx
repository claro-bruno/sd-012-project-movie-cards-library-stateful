import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
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
          type="text"
          id={ inputId }
          data-testid={ inputId }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  inputId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelDescription: PropTypes.string,
};

InputText.defaultProps = {
  labelDescription: '',
};

export default InputText;
