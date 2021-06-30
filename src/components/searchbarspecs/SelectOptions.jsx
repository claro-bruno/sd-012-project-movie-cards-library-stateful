import React from 'react';
import PropTypes from 'prop-types';

class SelectOptions extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange, name } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="select-input">
        Filtrar por gênero
        <select
          data-testid="select-input"
          value={ selectedGenre }
          name={ name }
          onChange={ onSelectedGenreChange }
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
SelectOptions.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,

};
export default SelectOptions;
