import React from 'react';
import { string, func } from 'prop-types';

class Select extends React.Component {
  render() {
    const { genre, updateGenre } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor>
        Gênero
        <select
          value={ genre }
          data-testid="genre-input"
          onChange={ updateGenre }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  updateGenre: func.isRequired,
  genre: string.isRequired,
};

export default Select;
