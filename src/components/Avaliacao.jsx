import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { rating, handleChange } = this.props;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          data-testid="rating-input"
          onChange={ handleChange }
          value={ rating }
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  handleChange: PropTypes.func,
}.isRequired;

export default Avaliacao;
