import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';
import './App.css';

// Contei com a ajuda com meu colega de Trybe David Gonzaga para a resolução de diversos requisitos deste projeto. Segue link para o Github do David: https://github.com/Gonzagadavid

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary
          movies={ movies }
        />
      </div>
    );
  }
}

export default App;
