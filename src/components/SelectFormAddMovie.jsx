import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, spanText, genre, handler } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ `${name}-input` }>
        <span className="mr15">{spanText}</span>
        <select
          name={ name }
          data-testid={ `${name}-input` }
          value={ genre }
          onChange={ handler }
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
  name: PropTypes.string.isRequired,
  spanText: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default Select;
