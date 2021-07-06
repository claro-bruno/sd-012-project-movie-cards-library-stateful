import React from 'react';

class ImageInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            id="image-input"
            data-testid="image-input"
            type="text"
            value={ value }
            onChange={ onChange }
          />
        </label>
    )
  }
}

export default ImageInput;
