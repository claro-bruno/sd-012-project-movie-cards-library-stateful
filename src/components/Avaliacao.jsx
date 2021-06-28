import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { rating, handleChange } = this.props;

    return (
      <label htmlFor="Avaliação" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="Avaliação"
          data-testid="rating-input"
          onChange={ handleChange }
          value={ rating }
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func,
};

export default Avaliacao;
