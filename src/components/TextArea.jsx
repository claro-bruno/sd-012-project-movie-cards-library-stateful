import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { label, name, value, dataTestId, onChange } = this.props;

    return (
      <label htmlFor={ name } data-testid={ `${dataTestId}-label` }>
        { label }
        <textarea
          id={ name }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestId }
        />
      </label>
    );
  }
}

TextArea.propTypes = PropTypes.exact({
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}).isRequired;

export default TextArea;
