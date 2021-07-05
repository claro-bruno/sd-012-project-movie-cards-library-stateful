import React from 'react';
import './App.css';
import Header from './components/Header';
// import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

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
        {/* <SearchBar /> */}
        <AddMovie onClick={ this.onClickAddMovie } />
      </div>
    );
  }
}

export default App;
