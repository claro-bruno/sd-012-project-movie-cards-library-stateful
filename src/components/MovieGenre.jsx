import React from 'react';
import PropTypes from 'prop-types';

class MovieGenre extends React.Component {
  render() {
    const { name, onChange, value } = this.props;

    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name={ name }
          data-testid="genre-input"
          onChange={ onChange }
          value={ value }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

MovieGenre.defaultProps = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

MovieGenre.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default MovieGenre;
