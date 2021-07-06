import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onClickAddMovie = this.onClickAddMovie.bind(this);
  }

  onClickAddMovie(state) {
    console.log(state);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ movies } />
      </div>
    );
  }
}

export default App;
