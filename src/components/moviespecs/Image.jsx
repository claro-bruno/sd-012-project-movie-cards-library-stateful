import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label
        data-testid="image-input-label"
        htmlFor="image-input"
      >
        Imagem
        <input
          type="text"
          value={ value }
          name="imagePath"
          onChange={ handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}
Image.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Image;
