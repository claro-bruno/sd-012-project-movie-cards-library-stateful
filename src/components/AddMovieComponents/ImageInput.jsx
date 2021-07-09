import React from 'react';
import PropTypes from 'prop-types';

class ImageInput extends React.Component {
  render() {
    const { imagePath, updateState } = this.props;
    return (
      <label htmlFor="imageInput" data-testid="image-input-label">
        Imagem
        <input
          id="imageInput"
          name="imagePath"
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ updateState }
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  imagePath: PropTypes.string,
  updateState: PropTypes.func,
}.isRequired;

export default ImageInput;
