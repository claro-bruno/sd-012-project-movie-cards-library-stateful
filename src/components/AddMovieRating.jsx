import React from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating-label" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          id="rating"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieRating;
