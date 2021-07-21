import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
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
        <textarea
          id={ inputId }
          data-testid={ inputId }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  inputId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelDescription: PropTypes.string,
};

Textarea.defaultProps = {
  labelDescription: '',
};

export default Textarea;
