import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputImg extends Component {
  render() {
    const { imagePath } = this.props;
    return (
      <div>
        <label htmlFor="mage-input" data-testid="image-input-label">
          Imagem
          <input data-testid="image-input" onChange={ imagePath } />
        </label>
      </div>
    );
  }
}

InputImg.propTypes = {
  imagePath: PropTypes.string.isRequired,
};
