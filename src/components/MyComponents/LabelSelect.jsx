import React from 'react';
import PropTypes from 'prop-types';

class LabelSelect extends React.Component {
  render() {
    const {
      handleChange,
      genre,
    } = this.props;
    return (
      <label
        htmlFor="input-select"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          id="genre-input"
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}
LabelSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};
export default LabelSelect;
