import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSelect extends Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="inputSelect" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="selectedGenre"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">
            Todos
          </option>
          <option value="action" data-testid="select-option">
            Ação
          </option>
          <option value="comedy" data-testid="select-option">
            Comédia
          </option>
          <option value="thriller" data-testid="select-option">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  gender: PropTypes.string,
  onChangeGender: PropTypes.func,
}.isRequired;

export default InputSelect;
