import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText=""
          onSearchTextChange={ () => {} }
          bookmarkedOnly={ false }
          onBookmarkedChange={ () => {} }
          selectedGenre=""
          onSelectedGenreChange={ () => {} }
        />
      </div>
    );
  }
}

export default App;
