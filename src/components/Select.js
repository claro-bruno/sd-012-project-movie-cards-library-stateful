import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { genre } = this.props;
    return (
      <div>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select data-testid="genre-input" defaultValue={ genre }>
            <option data-testid="genre-option" value="action">
              Ação
            </option>
            <option data-testid="genre-option" value="comedy">
              Comédia
            </option>
            <option data-testid="genre-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  genre: PropTypes.string.isRequired,
};
