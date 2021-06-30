import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBarCheckbox extends React.Component {
  render() {
    const { onBookmarkedChange, bookmarkedOnly } = this.props;
    return (
      <label
        htmlFor="checkbox"
        data-testid="checkbox-input-label"
      >
        Mostrar somente favoritos
        <input
          onChange={ onBookmarkedChange }
          type="Checkbox"
          data-testid="checkbox-input"
          checked={ bookmarkedOnly }
          id="checkbox"
        />
      </label>
    );
  }
}

SearchBarCheckbox.propTypes = {
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
};
