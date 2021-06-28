import React from 'react';
import PropTypes from 'prop-types';

class Titulo extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Titulo" data-testid="title-input-label">
        Título
        <input
          type="text"
          value={ value }
          name="title"
          onChange={ handleChange }
          id="Titulo"
          data-testid="title-input"
        />
      </label>
    );
  }
}

Titulo.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Titulo;
