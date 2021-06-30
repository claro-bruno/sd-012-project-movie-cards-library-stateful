import React from 'react';
// import PropTypes from 'prop-types';

export default class AddMovieInputRating extends React.Component {
  render() {
    // const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        htmlFor="rating"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          // onChange={ this.changeHandler }
          type="number"
          data-testid="rating-input"
          // value={ this.state.rating }
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
