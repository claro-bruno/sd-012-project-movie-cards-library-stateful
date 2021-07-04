import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { label, name, ctrl, value, onChange } = this.props;
    return (
      ctrl === 'select' ? (
        <label htmlFor={ `${ctrl}-input` } data-testid={ `${ctrl}-input-label` }>
          { label }
          <select
            id={ `${ctrl}-input` }
            name={ name }
            value={ value }
            onChange={ onChange }
            data-testid={ `${ctrl}-input` }
          >
            <option value="" data-testid={ `${ctrl}-option` }>Todos</option>
            <option value="action" data-testid={ `${ctrl}-option` }>Ação</option>
            <option value="comedy" data-testid={ `${ctrl}-option` }>Comédia</option>
            <option value="thriller" data-testid={ `${ctrl}-option` }>Suspense</option>
          </select>
        </label>
      ) : (
        <label htmlFor={ `${name}-input` } data-testid={ `${name}-input-label` }>
          { label }
          <select
            id={ `${name}-input` }
            name={ name }
            value={ value }
            onChange={ onChange }
            data-testid={ `${name}-input` }
          >
            <option value="action" data-testid={ `${name}-option` }>Ação</option>
            <option value="comedy" data-testid={ `${name}-option` }>Comédia</option>
            <option value="thriller" data-testid={ `${name}-option` }>Suspense</option>
          </select>
        </label>
      )
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ctrl: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  ctrl: '',
};

export default Select;
