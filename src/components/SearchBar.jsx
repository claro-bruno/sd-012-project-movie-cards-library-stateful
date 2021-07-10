import React from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <input type="search" name="" id="text-input" />
        <button type="submit">Search</button>
      </form>
    );
  }
}

// SearchBar.propTypes = {
// };

export default SearchBar;
