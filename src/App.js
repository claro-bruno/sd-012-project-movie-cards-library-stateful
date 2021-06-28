import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={ '1' } 
          onSearchTextChange={ () => 'oi' }
          bookmarkedOnly={ true }
          onBookmarkedChange={ () => 'oi' }
          selectedGenre={ '1' }
          onSelectedGenreChange={ () => 1 }
        />
      </div>
    );
  }
}

export default App;
