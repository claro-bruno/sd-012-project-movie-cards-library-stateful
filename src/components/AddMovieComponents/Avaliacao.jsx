import React from 'react';
import propTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { handleAddMovies, value } = this.props;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          value={ value }
          data-testid="rating-input"
          onChange={ handleAddMovies }
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  value: propTypes.number,
  handleAddMovies: propTypes.func,

};

Avaliacao.defaultProps = {
  value: 0,
  handleAddMovies: () => {},
};

export default Avaliacao;
