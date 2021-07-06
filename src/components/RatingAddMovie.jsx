import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class RatingAddMovie extends Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <Input
        labelTestId="rating-input-label"
        labelText="Avaliação"
        type="number"
        inputTestId="rating-input"
        value={ rating }
        onChange={ onChange }
        name="rating"
      />
    );
  }
}

RatingAddMovie.propTypes = {
  rating: PropTypes.number,
  onChange: PropTypes.func,
}.isRequired;

export default RatingAddMovie;
