import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const generes = [
      { genre: 'Ação', genreValue: 'action' },
      { genre: 'Comédia', genreValue: 'comedy' },
      { genre: 'Suspense', genreValue: 'thriller' },
    ];
    const {
      label,
      name,
      value,
      labelId,
      inputId,
      optionId,
      onSelectedGenreChange } = this.props;
    return (
      <label
        htmlFor={ name }
        data-testid={ labelId }
      >
        <p>{ label }</p>
        <select
          name={ name }
          value={ value }
          onChange={ onSelectedGenreChange }
          data-testid={ inputId }
        >
          {name === 'selectedGenre' && generes.unshift({ genre: 'Todos', genreValue: '' })}

          {generes.map(({ genre, genreValue }) => {
            const optionTag = (
              <option
                key={ genreValue }
                value={ genreValue }
                data-testid={ optionId }
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
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  optionId: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
}).isRequired;

export default Select;
