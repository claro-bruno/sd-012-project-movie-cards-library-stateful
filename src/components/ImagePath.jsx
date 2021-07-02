import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { changeHandler, imagePath } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          id="imagePath"
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ changeHandler }
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default ImagePath;
