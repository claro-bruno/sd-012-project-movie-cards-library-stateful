import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { handleImage, valueImagePath } = this.props;
    return (
      <p>
        <label
          htmlFor="image-input"
          data-testid="image-input-label"
        >
          Imagem
          <input
            type="text"
            data-testid="image-input"
            value={ valueImagePath }
            name="imagePath"
            onChange={ handleImage }
          />
        </label>
      </p>
    );
  }
}

ImagePath.propTypes = {
  valueImagePath: PropTypes.string.isRequired,
  handleImage: PropTypes.func.isRequired,
};

export default ImagePath;
