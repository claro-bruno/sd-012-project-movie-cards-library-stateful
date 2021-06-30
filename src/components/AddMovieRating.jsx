import React from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (

      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          data-testid="rating-input"
          type="number"
          value={ value }
          onChange={ onChange }
        />

      </label>

    );
  }
}
export default AddMovieRating;

AddMovieRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
