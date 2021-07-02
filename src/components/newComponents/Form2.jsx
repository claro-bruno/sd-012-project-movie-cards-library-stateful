import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Input from './Input';
import Option from './Option';

class Form2 extends Component {
  render() {
    const { rating, genre, handleChange } = this.props;

    return (
      <div>
        <Input
          name="rating"
          dataId="rating"
          message="Avaliação"
          value={ rating }
          type="text"
          onChange={ handleChange }
        />
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            onChange={ handleChange }
            value={ genre }
          >
            <Option value="action" type="Ação" dataId="genre" />
            <Option value="comedy" type="Comédia" dataId="genre" />
            <Option value="thriller" type="Suspense" dataId="genre" />
          </select>
        </label>
      </div>
    );
  }
}

Form2.propTypes = {
  rating: Proptypes.number.isRequired,
  handleChange: Proptypes.func.isRequired,
  genre: Proptypes.string.isRequired,
};

export default Form2;
