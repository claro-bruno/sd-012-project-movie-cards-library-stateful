import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovieImage extends React.Component {
  render() {
    const { imagePath, func } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ func }
        />
      </label>
    );
  }
}

AddMovieImage.propTypes = ({
  imagePath: PropTypes.string,
  func: PropTypes.func,
}).isRequired;
