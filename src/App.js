import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
          searchText:'',
          bookmarkedOnly:false,
          onBookmarkedChange:'',
          selectedGenre:'',
          onSelectedGenreChang:'',
    }
  }
  
  

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar 
          searchText=''
          onSearchTextChange=''
          bookmarkedOnly=''
          onBookmarkedChange=''
          selectedGenre=''
          onSelectedGenreChange=''

        />
      </div>
    )
  }
}

export default App;
