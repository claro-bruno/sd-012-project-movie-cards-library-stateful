import React from 'react';
import PropTypes from 'prop-types';

class ImageMovie extends React.Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <label htmlFor="movie-image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          onChange={ onChange }
          value={ imagePath }
        />
      </label>
    );
  }
}

export default ImageMovie;

ImageMovie.propTypes = {
  imagePath: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
