import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePathInput extends Component {
  render() {
    const { valueImageInput, handleChangeImage } = this.props;

    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ valueImageInput }
          data-testid="image-input"
          onChange={ handleChangeImage }
        />
      </label>
    );
  }
}

ImagePathInput.propTypes = {
  valueImageInput: PropTypes.string.isRequired,
  handleChangeImage: PropTypes.func.isRequired,
};

export default ImagePathInput;
