import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

// passar funcao e state para movielibrary
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary />
        <AddMovie />
      </div>
    );
  }
}

export default App;
