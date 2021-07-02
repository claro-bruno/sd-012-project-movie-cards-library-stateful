import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <section>
        <form data-testid="search-bar-form" action="">
          <input type="text" data-testid="text-input" id="filter" />
          <input type="checkbox" name="" id="" />
        </form>
      </section>
    );
  }
}

export default SearchBar;
