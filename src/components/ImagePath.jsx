import React from 'react';
import propTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="Image" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ value }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  handleChange: propTypes.func,
  value: propTypes.string,
};

ImagePath.defaultProps = {
  handleChange: () => {},
  value: '',
};

export default ImagePath;
