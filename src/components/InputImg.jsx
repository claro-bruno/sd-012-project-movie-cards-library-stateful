import React from 'react';
import PropTypes from 'prop-types';

class InputImg extends React.Component {
  render() {
    const { value, handleClick } = this.props;
    return (
      <label htmlFor="input-img" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          id="input-img"
          data-testid="image-input"
          value={ value }
          onChange={ handleClick }
        />
      </label>
    );
  }
}
InputImg.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default InputImg;
