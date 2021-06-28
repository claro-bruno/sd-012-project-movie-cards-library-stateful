import React from 'react';
import SearchBar from './SearchBar';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
        <SearchBar />
      </header>
    );
  }
}

export default Header;
