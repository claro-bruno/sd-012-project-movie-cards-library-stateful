import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const {
      bookmarkedOnly,
      checkOnChange,
    } = this.props;
    return (
      <label htmlFor="checkbox" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          name="bookmarkedOnly"
          type="checkbox"
          value={ bookmarkedOnly }
          onChange={ checkOnChange }
          data-testid="checkbox-input"
          checked={ bookmarkedOnly }
        />
      </label>
    );
  }
}

Checkbox.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  checkOnChange: PropTypes.func.isRequired,
};

export default Checkbox;
