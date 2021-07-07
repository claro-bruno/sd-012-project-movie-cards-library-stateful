import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends Component {
  render() {
    const { genre, updateState } = this.props;

    return (
      <div>
        <label
          htmlFor="genre"
          data-testid="genre-input-label"
        >
          Gênero
          <select
            name="genre"
            id="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ updateState }
          >
            <option
              value="action"
              data-testid="genre-option"
            >
              Ação
            </option>
            <option
              value="comedy"
              data-testid="genre-option"
            >
              Comédia
            </option>
            <option
              value="thriller"
              data-testid="genre-option"
            >
              Suspense
            </option>
          </select>
        </label>
      </div>
    );
  }
}

SelectGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default SelectGenre;
