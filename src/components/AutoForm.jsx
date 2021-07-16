import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AutoForm extends Component {
  render() {
    const {
      valueInput,
      labelHtmlFor,
      labelDataTestId,
      labelTitle,
      typeInput,
      onChange,
      nameInput,
    } = this.props;
    return (
      <label htmlFor={ labelHtmlFor } data-testid={ labelDataTestId }>
        {labelTitle}
        <input
          id={ labelHtmlFor }
          type={ typeInput }
          value={ valueInput }
          data-testid={ labelDataTestId }
          onChange={ onChange }
          name={ nameInput }
        />
      </label>
    );
  }
}

AutoForm.defaultProps = {
  typeInput: 'text',
};

AutoForm.propTypes = {
  valueInput: PropTypes.string.isRequired,
  labelHtmlFor: PropTypes.string.isRequired,
  labelDataTestId: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  typeInput: PropTypes.string,
  onChange: PropTypes.string.isRequired,
  nameInput: PropTypes.string.isRequired,
};

export default AutoForm;
