import React from 'react';
import movies from './data';
import MovieLibrary from './components/MovieLibrary';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MovieLibrary movies={ movies } />
      </div>
    );
  }
}

export default App;
