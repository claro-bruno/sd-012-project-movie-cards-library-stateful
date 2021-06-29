import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';
import './App.css';

class App extends React.Component {
  buttonAddMovie() {
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddMovie onClick={ this.buttonAddMovie } />
        <MovieLibrary
          movies={ movies }
        />
      </div>
    );
  }
}

export default App;
