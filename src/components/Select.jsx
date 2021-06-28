import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const genres = [
      { genre: 'Todos', value: '' },
      { genre: 'Ação', value: 'action' },
      { genre: 'Comédia', value: 'comedy' },
      { genre: 'Suspense', value: 'thriller' },
    ];

    const { label, type, name, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <label htmlFor={ name } data-testid="select-input-label">
        { label }
        <select
          id={ name }
          name={ name }
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid={ `${type}-input` }
        >

          {genres.map(({ genre, value }) => {
            const optionTag = (
              <option
                key={ value }
                value={ value }
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
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
}).isRequired;

export default Select;
