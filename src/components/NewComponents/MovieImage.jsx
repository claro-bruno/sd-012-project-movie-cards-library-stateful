import React from 'react';

class MovieImage extends React.Component {
  render() {
    const { image, handleChangeFunction } = this.props;
    return (
      <label htmlFor="MovieImage" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          value={ image }
          type="text"
          alt="something"
          name="imagePath"
          onChange={ handleChangeFunction }
        />

      </label>
    );
  }
}

export default MovieImage;
