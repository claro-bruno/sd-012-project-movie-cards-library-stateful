import React from 'react';
// import PropTypes from 'prop-types';

export default class AddMovieInput extends React.Component {
  render() {
    const { cHandler, value } = this.props;
    return (
      <label
        htmlFor="title"
        data-testid="title-input-label"
      >
        Título
        <input
          onChange={ cHandler }
          type="text"
          data-testid="title-input"
          value={ value }
          id="title"
        />
      </label>
    );
  }
}

// AddMovieInput.propTypes = {
//   onSearchTextChange: PropTypes.func.isRequired,
//   searchText: PropTypes.string.isRequired,
// };
