import React from 'react';
import propTypes from 'prop-types';

class Subtitulo extends React.Component {
  render() {
    const { handleAddMovies, value } = this.props;

    return (
      <label htmlFor="subtitulo" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="subtitulo"
          value={ value }
          data-testid="subtitle-input"
          onChange={ handleAddMovies }
        />
      </label>
    );
  }
}

Subtitulo.propTypes = {
  value: propTypes.string,
  handleAddMovies: propTypes.func,
};

Subtitulo.defaultProps = {
  value: '',
  handleAddMovies: () => {},
};

export default Subtitulo;
