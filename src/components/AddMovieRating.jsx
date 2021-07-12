import React from 'react';
import PropTypes from 'prop-types'

class AddMovieRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        data-testid="rating-input"
        type="number"
        name="rating"
        id="rating"
        value={ value }
        onChange={ onChange }
    />
    );
  }
}

AddMovieRating.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default AddMovieRating;
