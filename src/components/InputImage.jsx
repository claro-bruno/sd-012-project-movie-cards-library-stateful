import React from 'react';

class InputImage extends React.Component {
  render() {
    const { imagePath, updateImage } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor>
        Imagem
        <input
          type="text"
          onChange={ updateImage }
          data-testid="image-input"
          value={ imagePath }
        />
      </label>
    );
  }
}

export default InputImage;
