import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

export default App;
