import React from 'react';
import MovieList from './components/MovieList';
import movies from './data';
import SearchBar from './components/SearchBar';

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
