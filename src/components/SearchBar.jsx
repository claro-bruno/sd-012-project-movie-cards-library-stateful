import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;
    return(
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">
            Inclui o texto  
            <input 
              type="text" 
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"    
            />
          </label>
        </form>
      </div>
    )
  }
}

SearchBar.propTypes = {
  seachText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
};

export default SearchBar;
