import React from 'react';
import Header from './components/Header';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddMovie />
        <MovieLibrary />
      </div>
    );
  }
}
export default App;
