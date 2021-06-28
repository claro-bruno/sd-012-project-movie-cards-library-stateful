// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <section>
        <form data-testid="search-bar-form">
          <label
            data-testid="text-input-label"
            htmlFor="input-text"
          >
            Inclui o texto
            <input
              id="input-text"
              type="text"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
        </form>
      </section>

    );
  }
}

SearchBar.propTypes = {

  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,

};

export default SearchBar;
