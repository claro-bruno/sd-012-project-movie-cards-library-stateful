import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, name, value,
      handleChange, type } = this.props;
    return (
      <label htmlFor={ `${name}-input-label` } data-testid={ `${name}-input-label` }>
        {label}
        <select
          name={ name }
          value={ value }
          onChange={ handleChange }
          type={ type }
          data-testid={ `${name}-input` }
        >
          <option data-testid={ `${name}-option` } value="action">Ação</option>
          <option data-testid={ `${name}-option` } value="comedy">Comédia</option>
          <option data-testid={ `${name}-option` } value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  type: PropTypes.string,
}.isRequired;

export default Select;
