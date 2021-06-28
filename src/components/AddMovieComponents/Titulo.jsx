import React from 'react';
import propTypes from 'prop-types';

class Titulo extends React.Component {
  render() {
    const { handleAddMovies, value } = this.props;

    return (
      <label htmlFor="titulo" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          id="titulo"
          value={ value }
          data-testid="title-input"
          onChange={ handleAddMovies }
        />
      </label>
    );
  }
}

Titulo.propTypes = {
  value: propTypes.string,
  handleAddMovies: propTypes.func,
};

Titulo.defaultProps = {
  value: '',
  handleAddMovies: () => {},
};

export default Titulo;
