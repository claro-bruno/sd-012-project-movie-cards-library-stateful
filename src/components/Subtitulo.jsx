import React from 'react';
import PropTypes from 'prop-types';

class Subtitulo extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;

    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="subtitle"
          data-testid="subtitle-input"
          onChange={ handleChange }
          value={ subtitle }
        />
      </label>
    );
  }
}

Subtitulo.propTypes = {
  subtitle: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Subtitulo;
