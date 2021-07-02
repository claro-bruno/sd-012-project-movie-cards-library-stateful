import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleInput extends Component {
  render() {
    const { title, method } = this.props;
    return (
      <label htmlFor="movie-add-title" data-testid="title-input-label">
        Título
        <input
          id="movie-add-title"
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ method }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  title: PropTypes.string.isRequired,
  method: PropTypes.func.isRequired,
};

export default TitleInput;
