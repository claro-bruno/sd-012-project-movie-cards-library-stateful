import React from 'react';

class Image extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label
        data-testid="image-input-label"
        htmlFor="image-input"
      >
        Imagem
        <input
          type="text"
          value={ imagePath }
          name={ name }
          onChange={ handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}
export default Image;
