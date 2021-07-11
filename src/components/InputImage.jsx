import React from 'react';
import { string, func } from 'prop-types';

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

InputImage.propTypes = {
  updateImage: func.isRequired,
  imagePath: string.isRequired,
};

export default InputImage;
