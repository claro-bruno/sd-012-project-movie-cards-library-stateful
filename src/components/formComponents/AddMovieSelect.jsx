import React from 'react';
// import PropTypes from 'prop-types';

export default class AddMovieSelect extends React.Component {
  render() {
    // const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        htmlFor="genre"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          onChange={ this.changeHandler }
          // value={ this.state.genre }
          data-testid="genre-input"
          id="genre"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

// AddMovieSelect.propTypes = {
//   onSearchTextChange: PropTypes.func.isRequired,
//   searchText: PropTypes.string.isRequired,
// };
