import React from 'react';
import PropTypes from 'prop-types';

class AddMovieGenre extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (

      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          type="text"
          value={ value }
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>

        </select>

      </label>

    );
  }
}
export default AddMovieGenre;

AddMovieGenre.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
