import React from 'react';
// import PropTypes from 'prop-types';

export default class AddMovieTextarea extends React.Component {
  render() {
    // const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        htmlFor="storyline"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          onChange={ this.changeHandler }
          data-testid="storyline-input"
          id="storyline"
          // value={ this.state.storyline }
        />
      </label>
    );
  }
}

// AddMovieTextarea.propTypes = {
//   onSearchTextChange: PropTypes.func.isRequired,
//   searchText: PropTypes.string.isRequired,
// };
