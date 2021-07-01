import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;
    return (
      <label htmlFor="inputText" data-testid="text-input-label">
        Inclui o texto
        <input
          type="text"
          name="searchText"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
}.isRequired;

export default InputText;
