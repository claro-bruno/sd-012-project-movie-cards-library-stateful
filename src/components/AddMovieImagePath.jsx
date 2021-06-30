import React from 'react';
import PropTypes from 'prop-types';

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

AddMovieImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
