import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieImagePath extends Component {
  render() {
    const { handle, imagePath } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="image-input"
          data-testid="image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ handle }
        />
      </label>
    );
  }
}

AddMovieImagePath.propTypes = {
  handle: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default AddMovieImagePath;
