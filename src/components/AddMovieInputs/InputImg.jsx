import React from 'react';
import PropTypes from 'prop-types';

class InputImg extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="inputImg" data-testid="image-input-label">
        Imagem:
        <input
          id="inputImg"
          type="text"
          value={ value }
          data-testid="image-input"
          onChange={ onChange }
        />

      </label>
    );
  }
}

InputImg.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputImg;
