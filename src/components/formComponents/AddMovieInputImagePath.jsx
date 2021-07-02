import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovieInputImagePath extends React.Component {
  render() {
    const { cHandler, value } = this.props;
    return (
      <label
        htmlFor="imagePath"
        data-testid="image-input-label"
      >
        Imagem
        <input
          onChange={ cHandler }
          type="text"
          data-testid="image-input"
          value={ value }
          id="imagePath"
        />
      </label>
    );
  }
}

AddMovieInputImagePath.propTypes = {
  cHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
