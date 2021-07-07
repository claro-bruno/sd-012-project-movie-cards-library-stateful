import React, { Component } from 'react';
import Proptypes from 'prop-types';

class FilterGenre extends Component {
  render() {
    const {
      valueSelect,
      onChangeSelect,
    } = this.props;
    return (
      <label htmlFor="filter" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="selectedGenre"
          value={ valueSelect }
          onChange={ onChangeSelect }
          data-testid="select-input"
        >
          <option
            data-testid="select-option"
            name="Todos"
            value=""
          >
            Todos
          </option>
          <option
            data-testid="select-option"
            name="Ação"
            value="action"
          >
            Ação
          </option>
          <option
            data-testid="select-option"
            name="Comédia"
            value="comedy"
          >
            Comédia
          </option>
          <option
            data-testid="select-option"
            name="Suspense"
            value="thriller"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

FilterGenre.propTypes = {
  valueSelect: Proptypes.string.isRequired,
  onChangeSelect: Proptypes.func.isRequired,
};

export default FilterGenre;
