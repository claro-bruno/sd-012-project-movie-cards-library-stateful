import React from 'react';
import PropTypes from 'prop-types';

class Titulo extends React.Component {
  render() {
    const { title, handleChange } = this.props;

    return (
      <label htmlFor="Título" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          id="Título"
          data-testid="title-input"
          onChange={ handleChange }
          value={ title }
        />
      </label>
    );
  }
}

Titulo.propTypes = {
  title: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Titulo;
