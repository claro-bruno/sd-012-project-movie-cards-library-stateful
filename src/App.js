import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import moviesData from './data';
import MovieLibrary from './components/MovieLibrary';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: moviesData,
    };
    // this.updateData = this.updateData.bind(this);
  }

  // async updateData(movie) {
  //   this.setState((previous) => {
  //     const newData = [...previous.movies];
  //     newData.push(movie);
  //     return { movies: newData };
  //   });
  // }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <Header />
        <MovieLibrary
          movies={ movies }
          parentThis={ this } // dica de Lucas Chamma Nahas - T12
          // callback={ this.updateData }
        />
      </div>
    );
  }
}
