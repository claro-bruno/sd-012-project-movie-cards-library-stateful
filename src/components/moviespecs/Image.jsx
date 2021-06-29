import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label
        data-testid="image-input-label"
        htmlFor="image-input"
      >
        Imagem
        <input
          type="text"
          value={ imagePath }
          name="imagePath"
          onChange={ handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}
Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Image;
