import React from 'react';
import PropTypes from 'prop-types';

class TypeText extends React.Component {
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

TypeText.propTypes = {
  inputId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelDescription: PropTypes.string,
};

TypeText.defaultProps = {
  labelDescription: '',
};

export default TypeText;
