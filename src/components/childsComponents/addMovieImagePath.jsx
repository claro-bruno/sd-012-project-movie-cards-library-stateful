import React from 'react';
import PropTypes from 'prop-types';

class AddMovieImagePath extends React.Component {
  render() {
    const { handleChange, imagePath } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieImagePath.propTypes = {
  handleChange: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default AddMovieImagePath;
