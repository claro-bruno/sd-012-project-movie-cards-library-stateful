import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;

    return (
      <label data-testid="text-input-label" htmlFor="Inclui o texto:">
        Inclui o texto
        <input
          name="searchText"
          data-testid="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};
