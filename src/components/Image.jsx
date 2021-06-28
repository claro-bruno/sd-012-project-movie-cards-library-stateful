import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { image, newCard } = this.props;
    return (
      <label
        htmlFor="image"
        data-testid="image-input-label"
      >
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ image }
          onChange={ newCard }
          data-testid="image-input"
          id="image"
        />
      </label>
    );
  }
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
  newCard: PropTypes.func.isRequired,
};

export default Image;
