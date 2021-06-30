import React from 'react';
import './App.css';
import Header from './components/Header';
// import movies from './data';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="App">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
