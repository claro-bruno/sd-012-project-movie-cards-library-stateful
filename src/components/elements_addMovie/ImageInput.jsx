import React from 'react';
import PropTypes from 'prop-types';

class ImageInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="text" data-testid="image-input-label">
          Imagem
          <input
            value={ value }
            data-testid="image-input"
            onChange={ onChange }
            name="imagePath"
          />
        </label>
      </div>
    );
  }
}

ImageInput.propTypes = {
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImageInput;
