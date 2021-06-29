import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import './App.css';

class App extends React.Component {
  buttonAddMovie() {
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddMovie onClick={ this.buttonAddMovie } />
      </div>
    );
  }
}

export default App;
