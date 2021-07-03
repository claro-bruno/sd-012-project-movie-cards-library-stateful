import React from 'react';
import Header from './components/Header';
import './App.css';
// import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddMovie
          handleChange={ this.handleChange }
          onClick={ () => console.log('test!') }
        />
        <MovieLibrary
          movies={ movies }
        />
      </div>
    );
  }
}

export default App;
