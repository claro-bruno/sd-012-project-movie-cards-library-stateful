import React from 'react';
import PropTypes from 'prop-types';

class AddMovieImg extends React.Component {
  render() {
    const { image, onImageTextChange } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          value={ image }
          onChange={ onImageTextChange }
        />
      </label>
    );
  }
}

export default AddMovieImg;

AddMovieImg.propTypes = {
  image: PropTypes.string.isRequired,
  onImageTextChange: PropTypes.func.isRequired,
};
