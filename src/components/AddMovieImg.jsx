import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieImg extends Component {
  render() {
    const { imagePath, onChangeImage } = this.props;
    return (
      <label
        htmlFor="image-input-label"
        data-testid="image-input-label"
      >
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          value={ imagePath }
          onChange={ onChangeImage }
        />
      </label>
    );
  }
}

AddMovieImg.propTypes = {
  imagePath: PropTypes.string,
  onChangeImage: PropTypes.string,
}.isRequired;

export default AddMovieImg;
