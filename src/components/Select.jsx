import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, name, type, value, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid={ `${name}-input-label` }
          htmlFor={ `${name}-input-label` }
        >
          {label}
          <select
            data-testid={ `${name}-input` }
            name={ name }
            type={ type }
            value={ value }
            onChange={ handleChange }
          >
            <option value="action" data-testid={ `${name}-option` }>Ação</option>
            <option value="comedy" data-testid={ `${name}-option` }>Comédia</option>
            <option value="thriller" data-testid={ `${name}-option` }>Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Select;
