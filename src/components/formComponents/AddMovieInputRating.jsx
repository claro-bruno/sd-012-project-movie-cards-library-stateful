import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovieInputRating extends React.Component {
  render() {
    const { cHandler, value } = this.props;
    return (
      <label
        htmlFor="rating"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          onChange={ cHandler }
          type="number"
          data-testid="rating-input"
          value={ value }
          id="rating"
        />
      </label>
    );
  }
}

AddMovieInputRating.propTypes = {
  cHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
