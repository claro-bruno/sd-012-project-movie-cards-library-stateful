import React from 'react';
import PropTypes from 'prop-types';

class Formlabelimage extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="image"
        data-testid="image-input-label"
      >
        Imagem
        <input
          id="image"
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Formlabelimage.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Formlabelimage;
