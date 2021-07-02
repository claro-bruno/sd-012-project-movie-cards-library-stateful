import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePathInput extends Component {
  render() {
    const { imagePath, method } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="movie-add-img">
        Imagem
        <input
          type="text"
          id="movie-add-img"
          data-testid="image-input"
          value={ imagePath }
          onChange={ method }
        />
      </label>
    );
  }
}

ImagePathInput.propTypes = {
  imagePath: PropTypes.string.isRequired,
  method: PropTypes.func.isRequired,
};

export default ImagePathInput;
