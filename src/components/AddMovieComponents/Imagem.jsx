import React from 'react';
import propTypes from 'prop-types';

class Imagem extends React.Component {
  render() {
    const { handleAddMovies, value } = this.props;

    return (
      <label htmlFor="imagem" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="imagem"
          value={ value }
          data-testid="image-input"
          onChange={ handleAddMovies }
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  value: propTypes.string,
  handleAddMovies: propTypes.func,
};

Imagem.defaultProps = {
  value: '',
  handleAddMovies: () => {},
};

export default Imagem;
