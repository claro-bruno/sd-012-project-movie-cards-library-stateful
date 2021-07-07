import React from 'react';
import PropTypes from 'prop-types';

class FilterForGenre extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="select-genre" data-testid="select-input-label">
        Filtrar por gênero
        <select
          id="select-genre"
          data-testid="select-input"
          name="selectedGenre"
          value={ value }
          onChange={ handleChange }
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

FilterForGenre.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FilterForGenre;
