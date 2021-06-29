import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class AddMovie2 extends React.Component {
  render() {
    const { change, rating, genre, click } = this.props;
    return (
      <div>
        <Input
          type="number"
          labelText="Avaliação"
          dataTestidLabel="rating-input-label"
          value={ rating }
          dataTestidInput="rating-input"
          change={ change }
          name="rating"
        />
        <label
          data-testid="genre-input-label"
          htmlFor="select-addmovie"
        >
          Gênero
          <select
            id="select-addmovie"
            value={ genre }
            data-testid="genre-input"
            onChange={ change }
            name="genre"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          data-testid="send-button"
          onClick={ click }
          type="button"
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

AddMovie2.propTypes = {
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  click: PropTypes.func.isRequired,
};

export default AddMovie2;
