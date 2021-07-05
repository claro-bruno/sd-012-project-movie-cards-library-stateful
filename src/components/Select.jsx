import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, name, type, value, handleChange } = this.props;

    return (
      <section>
        <label htmlFor={ `${name}-input-label` } data-testid={ `${name}-input-label` }>
          { label }
          <select
            type={ type }
            data-testid={ `${name}-input` }
            name={ name }
            value={ value }
            onChange={ handleChange }
          >
            <option data-testid={ `${name}-option` } value="action"> Ação </option>
            <option data-testid={ `${name}-option` } value="comedy"> Comédia </option>
            <option data-testid={ `${name}-option` } value="thriller"> Suspense </option>
          </select>
        </label>
      </section>
    );
  }
}

export default Select;

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
