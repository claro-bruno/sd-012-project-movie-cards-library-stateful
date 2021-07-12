import React from 'react';
import PropTypes from 'prop-types';

class AddMovieImage extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="image-label" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          id="imagePath"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieImage.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieImage;
