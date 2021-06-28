import React from 'react';
import PropTypes from 'prop-types';

class GenericInput extends React.Component {
  render() {
    const { label, name, id, value, onChange, type } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        { label }
        <input
          name={ name }
          id={ id }
          type={ type }
          value={ value }
          data-testid={ id }
          onChange={ onChange }
        />
      </label>
    );
  }
}

GenericInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default GenericInput;
