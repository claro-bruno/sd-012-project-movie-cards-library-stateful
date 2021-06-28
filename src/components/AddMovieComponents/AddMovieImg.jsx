import React from 'react';

class AddMovieImg extends React.Component {
  render() {
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
        />
      </label>
    );
  }
}

export default AddMovieImg;
