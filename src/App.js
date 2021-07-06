import React from 'react';
import MovieList from './components/MovieList';
import movies from './data';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

class App extends React.Component {
  render() {
    console.log(React.Component);
    return (
      <div className="App">
        <MovieList movies={ movies } />
        <SearchBar />
      </div>
    );
  }
}

export default App;
