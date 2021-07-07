import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputImage extends Component {
  render() {
    const {
      imagePath,
      updateState,
    } = this.props;

    return (
      <div>
        <label
          htmlFor="imagePath"
          data-testid="image-input-label"
        >
          Imagem
          <input
            type="text"
            name="imagePath"
            id="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ updateState }
          />
        </label>
      </div>
    );
  }
}

InputImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default InputImage;
