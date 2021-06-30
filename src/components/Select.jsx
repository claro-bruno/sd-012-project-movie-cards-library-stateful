import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { label, name, value, dataTestId, onChange, options } = this.props;

    return (
      <label htmlFor={ name } data-testid={ `${dataTestId}-label` }>
        { label }
        <select
          id={ name }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestId }
        >

          {options.map(({ genre, genreValue }) => {
            const optionTag = (
              <option
                key={ genreValue }
                value={ genreValue }
                data-testid={ `${(name === 'genre' ? name : 'select')}-option` }
              >
                { genre }
              </option>
            );
            return optionTag;
          })}

        </select>
      </label>
    );
  }
}

Select.propTypes = PropTypes.exact({
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.exact({
    genre: PropTypes.string.isRequired,
    genreValue: PropTypes.string.isRequired,
  })).isRequired,
}).isRequired;

export default Select;
