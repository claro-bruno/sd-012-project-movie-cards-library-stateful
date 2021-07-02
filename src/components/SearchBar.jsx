import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <section>
        <form action="">
          <input type="text" data-testid="text-input" id="filter" />
        </form>
      </section>
    );
  }
}

export default SearchBar;
