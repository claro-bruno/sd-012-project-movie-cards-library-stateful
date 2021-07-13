import React from 'react';
import MovieList from './components/MovieList';
import movies from './data';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MovieList movies={ movies } />
        <SearchBar />
        <AddMovie />
        <MovieLibrary movies={ movies } />
      </div>
    );
  }
}

export default App;
