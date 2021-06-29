import PropTypes from 'prop-types';

import React from 'react';

class Image extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Imagem" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          id="Imagem"
          onChange={ handleChange }
          value={ value }
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
