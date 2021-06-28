import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="avaliação" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          value={ value }
          name="rating"
          onChange={ handleChange }
          id="avaliação"
          data-testid="rating-input"
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Avaliacao;
