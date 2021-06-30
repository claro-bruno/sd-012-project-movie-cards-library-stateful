import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBarInput extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        htmlFor="text-input"
        data-testid="text-input-label"
      >
        Inclui o texto
        <input
          onChange={ onSearchTextChange }
          type="text"
          data-testid="text-input"
          value={ searchText }
          id="texto"
          name="texto"
        />
      </label>
    );
  }
}

SearchBarInput.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};
