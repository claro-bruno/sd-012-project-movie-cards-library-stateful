import React from 'react';
import PropTypes from 'prop-types';

class ImageInput extends React.Component {
    render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="imageInput" data-testid="image-input">
        Título
        <input
          id="imageInput"
          name="image"
          type="text"
          value={ imagePath }
          data-testid="image-input-label"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  imagePath: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default ImageInput;
