import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import data from './data';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary data={ data } />
      </div>
    );
  }
}

export default App;
