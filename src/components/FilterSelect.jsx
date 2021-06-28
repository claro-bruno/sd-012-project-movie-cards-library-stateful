import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GenreOption from './GenreOption';

export default class FilterSelect extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="genre-filter"
        data-testid="select-input-label"
        id="select-input-label"
      >
        Filtrar por gênero
        <select
          id="genre-filter"
          value={ value }
          onChange={ onChange }
          data-testid="select-input"
        >
          <GenreOption inner="Todos" value="" testid="select-option" />
          <GenreOption inner="Ação" value="action" testid="select-option" />
          <GenreOption inner="Comédia" value="comedy" testid="select-option" />
          <GenreOption inner="Suspense" value="thriller" testid="select-option" />
        </select>
      </label>
    );
  }
}

FilterSelect.defaultProps = {
  value: undefined,
};

FilterSelect.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
