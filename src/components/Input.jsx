import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      searchText,
      inputOnChange,
    } = this.props;
    return (
      <label htmlFor="input-text" data-testid="text-input-label">
        Inclui o texto:
        <input
          name="searchText"
          type="text"
          value={ searchText }
          onChange={ inputOnChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

Input.propTypes = {
  searchText: PropTypes.string.isRequired,
  inputOnChange: PropTypes.func.isRequired,
};

export default Input;
