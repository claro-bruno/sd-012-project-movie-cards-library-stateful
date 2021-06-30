import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieTitle extends Component {
  render() {
    const { title, onChangeTitle } = this.props;
    return (
      <label
        htmlFor="addMovieTitle"
        data-testid="title-input-label"
      >
        Título
        <input
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ onChangeTitle }
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  title: PropTypes.string,
  onChangeTitle: PropTypes.string,
}.isRequired;

export default AddMovieTitle;
