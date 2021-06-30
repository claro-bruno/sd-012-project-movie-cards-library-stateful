import React from 'react';
import PropTypes from 'prop-types';

class InputImg extends React.Component {
  render() {
    const {
      value,
      handleChange,
    } = this.props;

    return (
      <label htmlFor="blabla" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputImg.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputImg;
