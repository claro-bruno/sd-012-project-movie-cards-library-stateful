import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageImput extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label data-testid="image-input-label" htmlFor="Imagem">
        Imagem
        <input
          name="imagePath"
          data-testid="image-input"
          type="text"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImageImput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
