import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label
        htmlFor="image-input"
        data-testid="image-input-label"
      >
        Imagem
        <input
          type="text"
          id="image-input"
          name="imagePath"
          data-testid="image-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>

    );
  }
}

export default ImagePath;

ImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
