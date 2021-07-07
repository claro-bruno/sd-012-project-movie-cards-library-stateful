import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectOptionLabel extends Component {
  render() {
    const {
      selectedGenre,
      onSelectedGenreChange
    } = this.props;

    return (
      <div>
        <label
          htmlFor="incluiSelect"
          data-testid="select-input-label"
        >
          Filtra por gênero
          <select
            id="incluiSelect"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option
              value=""
              data-testid="select-option"
            >
              Todos
            </option>
            <option
              value="action"
              data-testid="select-option"
            >
              Ação
            </option>
            <option
              value="comedy"
              data-testid="select-option"
            >
              Comédia
            </option>
            <option
              value="thriller"
              data-testid="select-option"
            >
              Suspense
            </option>
          </select>
        </label>
      </div>
    )
  }
}

SelectOptionLabel.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SelectOptionLabel;
