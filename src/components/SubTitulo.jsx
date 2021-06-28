import React from 'react';
import PropTypes from 'prop-types';

class SubTitulo extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Subtitulo" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          value={ value }
          name="subtitle"
          onChange={ handleChange }
          id="Subtitulo"
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

SubTitulo.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SubTitulo;
