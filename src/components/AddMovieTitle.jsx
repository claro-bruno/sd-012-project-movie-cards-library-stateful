import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieTitle extends Component {
  render() {
    const { handle, title } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="title-input"
          data-testid="title-input"
          name="title"
          value={ title }
          onChange={ handle }
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  handle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddMovieTitle;
