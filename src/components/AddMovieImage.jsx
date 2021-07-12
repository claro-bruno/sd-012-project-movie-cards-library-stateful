import React from 'react';
import PropTypes from 'prop-types'

class AddMovieImage extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        data-testid="image-input"
        type="number"
        name="imagePath"
        id="imagePath"
        value={ value }
        onChange={ onChange }
    />
    );
  }
}

AddMovieImage.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default AddMovieImage;
