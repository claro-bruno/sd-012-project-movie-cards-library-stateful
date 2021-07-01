import React from 'react';
import { func, number } from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { changeNumberHandle, rating } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="search" className="col-12">
        Avaliação
        <input
          className="form-control"
          type="number"
          placeholder="Insira uma Avaliação"
          data-testid="rating-input"
          onChange={ changeNumberHandle }
          value={ rating }
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  rating: number.isRequired,
  changeNumberHandle: func.isRequired,
};

export default Avaliacao;
