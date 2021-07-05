import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { label, name, type, value, handleChange } = this.props;

    return (
      <section>
        <label htmlFor={ `${name}-input-label` } data-testid={ `${name}-input-label` }>
          { label }
          <textarea
            type={ type }
            data-testid={ `${name}-input` }
            name={ name }
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </section>
    );
  }
}

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
