import React from 'react';
import PropTypes from 'prop-types';

class Imagem extends React.Component {
  render() {
    const { label, name, value,
      handleChange, type } = this.props;
    return (

      <label htmlFor="image-input-label" data-testid="image-input-label">
        {label}
        <input
          name={ name }
          value={ value }
          onChange={ handleChange }
          type={ type }
          data-testid="image-input"
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  type: PropTypes.string,
}.isRequired;

export default Imagem;
