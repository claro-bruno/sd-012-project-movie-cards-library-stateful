import React from 'react';
import PropTypes from 'prop-types';

class SelectTag extends React.Component {
  render() {
    const { selectLabelText, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      // console.log(this.props)
      <label
        data-testid="select-input-label"
        htmlFor="select-input-label"
        onSearchTextChange={ onSelectedGenreChange }
      >
        {selectLabelText}
        <select
          id="select-input-label"
          data-testid="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectTag.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  selectLabelText: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SelectTag;
