import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

class MovieInfos2 extends Component {
  render() {
    const {
      rating,
      genre,
      handleChange } = this.props;

    return (
      <>
        <Input
          label="Avaliação"
          type="number"
          name="rating"
          value={ String(rating) }
          onChange={ handleChange }
          labelId="rating-input-label"
          inputId="rating-input"
        />
        <Select
          label="Gênero"
          name="genre"
          value={ genre }
          labelId="genre-input-label"
          inputId="genre-input"
          optionId="genre-option"
          onChange={ handleChange }
        />
      </>
    );
  }
}

MovieInfos2.propTypes = PropTypes.exact({
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}).isRequired;

export default MovieInfos2;
