import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    return (
      <input
        type="text"
        id="movie-add-title"
        data-testid="title-input"
        value={ title }
        onChange={ this.handleTitleChange }
      />
    );
  }
}

export default TextInput;
