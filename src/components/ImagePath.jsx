import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;

    return (
      <label htmlFor="Imagem" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="Imagem"
          data-testid="image-input"
          onChange={ handleChange }
          value={ imagePath }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default ImagePath;
