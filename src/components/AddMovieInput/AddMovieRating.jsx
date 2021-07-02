import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovieRating extends React.Component {
  render() {
    const { rating, func } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          type="number"
          value={ rating }
          onChange={ func }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = ({
  rating: PropTypes.string,
  func: PropTypes.func,
}).isRequired;
