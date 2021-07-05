import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="addImagePath" data-testid="image-input-label">
        Imagem
        <input
          id="addImagePath"
          type="text"
          data-testid="image-input"
          name="imagePath"
          value={ value }
          onChange={ onChange }
          className="form-control"
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputImage;
