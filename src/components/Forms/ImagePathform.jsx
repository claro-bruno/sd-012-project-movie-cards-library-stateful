import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePathForm extends Component {
  render() {
    const { imagePathValue, imagePathOnChange } = this.props;

    return (
      <label htmlFor="imagePath-input" data-testid="imagePath-input-label">
        Imagem
        <input
          id="imagePath-input"
          type="text"
          value={ imagePathValue }
          data-testid="imagePath-input"
          onChange={ imagePathOnChange }
          name="imagePath"
        />
      </label>
    );
  }
}

ImagePathForm.propTypes = {
  imagePathOnChange: PropTypes.string.isRequired,
  imagePathValue: PropTypes.string.isRequired,
};

export default ImagePathForm;
