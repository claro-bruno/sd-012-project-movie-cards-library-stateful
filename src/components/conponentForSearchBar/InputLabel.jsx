import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputLabel extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <div>
        <label
          htmlFor="incluiTexto"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            type="text"
            id="incluiTexto"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label
          htmlFor="incluiCheckbox"
          data-testid="checkbox-input-label"
        >
          Mostra somente favoritos
          <input
            type="checkbox"
            id="incluiCheckbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </div>
    );
  }
}

InputLabel.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default InputLabel;
