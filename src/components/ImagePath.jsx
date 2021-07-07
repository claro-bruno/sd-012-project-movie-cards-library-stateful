import React from 'react';

class ImagePath extends React.Component {
  render() {
    const { changeHandler, imagePath } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="imagePath"
          name="imagePath"
          value={ imagePath }
          onChange={ changeHandler }
          data-testid="image-input"
        />
      </label>
    );
  }
}

export default ImagePath;