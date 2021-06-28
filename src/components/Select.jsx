import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const genres = [
      { genre: 'Todos', genreValue: '' },
      { genre: 'Ação', genreValue: 'action' },
      { genre: 'Comédia', genreValue: 'comedy' },
      { genre: 'Suspense', genreValue: 'thriller' },
    ];

    const { label, type, name, value, dataTestId, onChange } = this.props;

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

          {genres.map(({ genre, genreValue }) => {
            const optionTag = (
              <option
                key={ genreValue }
                value={ genreValue }
                data-testid={ `${type}-option` }
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
}).isRequired;

export default Select;
