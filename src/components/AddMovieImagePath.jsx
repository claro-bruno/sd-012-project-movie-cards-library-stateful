import React from 'react';

class AddMovieImagePath extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (

      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          data-testid="image-input"
          type="text"
          value={ value }
          onChange={ onChange }
        />

      </label>

    );
  }
}
export default AddMovieImagePath;
