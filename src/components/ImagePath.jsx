import React, { Component } from 'react';

class ImagePath extends Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return(
      <label htmlFor="image-input" data-testid="image-input-label">
      Imagem
      <input
        type="text"
        name="imagePath"
        value={ imagePath }
        data-testid="image-input"
        onChange={ this.handleChange }
      />
    </label>
    );
  }
}

export default ImagePath;
