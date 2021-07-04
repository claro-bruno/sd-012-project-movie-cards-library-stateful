import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { label, name, value,
      handleChange, type } = this.props;
    return (

      <label htmlFor={ `${name}-input-label` } data-testid={ `${name}-input-label` }>
        {label}
        <textarea
          name={ name }
          value={ value }
          onChange={ handleChange }
          type={ type }
          data-testid={ `${name}-input` }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  type: PropTypes.string,
}.isRequired;

export default TextArea;
