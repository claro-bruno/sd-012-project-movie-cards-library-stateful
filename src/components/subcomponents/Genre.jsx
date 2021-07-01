import React from 'react';
import { func, string } from 'prop-types';

class Genre extends React.Component {
  render() {
    const { changeGenreHandle, genre } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="search" className="col-12">
        Gênero
        <select
          className="form-control"
          data-testid="genre-input"
          onChange={ changeGenreHandle }
          value={ genre }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  genre: string.isRequired,
  changeGenreHandle: func.isRequired,
};

export default Genre;
