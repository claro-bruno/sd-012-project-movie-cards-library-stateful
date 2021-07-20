import React from 'react';
import PropTypes from 'prop-types';

class ImageMovie extends React.Component {
  render() {
    const { imagePath, onImgChange } = this.props;
    return (
      <label htmlFor="movie-image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          onChange={ onImgChange }
          value={ imagePath }
        />
      </label>
    );
  }
}

export default ImageMovie;

ImageMovie.propTypes = {
  imagePath: PropTypes.string,
  onImgChange: PropTypes.func,
}.isRequired;
