import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import './App.css';
import MovieLibrary from './components/MovieLibrary';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };

    this.getMovies = this.getMovies.bind(this);
  }

  getMovies(data) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, data],
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <Header />
        <AddMovie onClick={ this.getMovies } />
        <MovieLibrary movies={ movies } />
      </div>
    );
  }
}

export default App;
