import React from 'react';
// import PropTypes from 'prop-types';

export default class AddMovieSubtitle extends React.Component {
  render() {
    const { cHandler, value } = this.props;
    return (
      <label
        htmlFor="subtitle"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          onChange={ cHandler }
          type="text"
          data-testid="subtitle-input"
          value={ value }
          id="subtitle"
        />
      </label>
    );
  }
}

// AddMovieSubtitle.propTypes = {
//   onSearchTextChange: PropTypes.func.isRequired,
//   searchText: PropTypes.string.isRequired,
// };
