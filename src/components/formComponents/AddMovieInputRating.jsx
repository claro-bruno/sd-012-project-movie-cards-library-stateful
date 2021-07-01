import React from 'react';
// import PropTypes from 'prop-types';

export default class AddMovieInputRating extends React.Component {
  render() {
    const { changeHandler, rating } = this.props;
    return (
      <label
        htmlFor="rating"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          onChange={ changeHandler }
          type="number"
          data-testid="rating-input"
          value={ rating }
          id="rating"
        />
      </label>
    );
  }
}

// AddMovieInputRating.propTypes = {
//   onSearchTextChange: PropTypes.func.isRequired,
//   searchText: PropTypes.string.isRequired,
// };
