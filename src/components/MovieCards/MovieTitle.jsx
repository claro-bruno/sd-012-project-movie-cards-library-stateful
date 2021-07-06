import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieTitle extends Component {
  render() {
    const { title, onTitleTextChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={ title }
          onChange={ onTitleTextChange }
        />
      </label>
    );
  }
}

export default MovieTitle;

MovieTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleTextChange: PropTypes.func.isRequired,
};
