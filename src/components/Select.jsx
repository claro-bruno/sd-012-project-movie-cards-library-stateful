import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const generes = [
      { genre: 'Todos', genreValue: '' },
      { genre: 'Ação', genreValue: 'action' },
      { genre: 'Comédia', genreValue: 'comedy' },
      { genre: 'Suspense', genreValue: 'thriller' },
    ];
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="inputSelect" data-testid="select-input-label">
        <p>Filtrar por gênero</p>
        <select
          name="inputSelect"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          {generes.map(({ genre, genreValue }) => {
            const optionTag = (
              <option
                key={ genreValue }
                value={ genreValue }
                data-testid="select-option"
              >
                {genre}
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
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
}).isRequired;

export default Select;
