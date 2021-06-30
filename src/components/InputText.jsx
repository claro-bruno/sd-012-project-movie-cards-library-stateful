import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    const {
      text,
      onChangeText,
    } = this.props;
    return (
      <label htmlFor="inputText" data-testid="text-input-label">
        Inclui o texto
        <input
          data-testid="text-input"
          value={ text }
          onChange={ onChangeText }
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
