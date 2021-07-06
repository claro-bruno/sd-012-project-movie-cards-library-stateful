import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { value, onChange } = this.props;
    const labelData = 'image-input-label';
    const inputdata = 'image-input';
    return (
      <label data-testid={ labelData } htmlFor={ inputdata }>
        Imagem
        <input
          data-testid={ inputdata }
          type="text"
          name="imagePath"
          value={ value }
          id={ inputdata }
          onChange={ onChange }
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
