import React from 'react';
import PropTypes from 'prop-types';

function ImagePath({ imagePath, inputHandler }) {
  return (
    <label data-testid="image-input-label" htmlFor="imagePath">
      Imagem
      <input
        id="imagePath"
        data-testid="image-input"
        type="text"
        value={ imagePath }
        onChange={ (event) => inputHandler(event) }
      />
    </label>
  );
}

ImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
};
export default ImagePath;
