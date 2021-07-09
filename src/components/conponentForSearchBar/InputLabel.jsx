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
          htmlFor="Text"
          data-testid="text-input-label"
        >
          Inclui o texto
          <input
            name="searchText"
            type="text"
            id="Text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label
          htmlFor="Checkbox"
          data-testid="checkbox-input-label"
        >
          <input
            name="bookmarkedOnly"
            type="checkbox"
            id="Checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
          Mostrar somente favoritos
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
