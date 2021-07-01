import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label
        htmlFor="selectGenre"
        data-testid="select-input-label"
      >
        Filtrar por gênero
        <select
          name="selectedGenre"
          value={ selectedGenre }
          id="selectGenre"
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

Select.defaultProps = {
  selectedGenre: '',
  onSelectedGenreChange: console.log,
};

export default Select;
