import React from 'react';
import PropTypes from 'prop-types';

class InputTextImage extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="input-text-img" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ value }
          onChange={ onChange }
          id="input-text-img"
          data-testid="image-input"
        />
      </label>
    );
  }
}

InputTextImage.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTextImage;
