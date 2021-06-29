import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onClick(e) {
    e.preventDefault();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      subtitle,
      title,
      imagePath,
      storyLine,
      rating,
      genre,
    } = this.state;
    return (
      <div>
        <div className="App">
          <Header />
        </div>
        <div>
          <MovieLibrary
            searchText={ searchText }
            onSearchTextChange={ this.handleChange }
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ this.handleChange }
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ this.handleChange }
            title={ title }
            subtitle={ subtitle }
            imagePath={ imagePath }
            storyLine={ storyLine }
            rating={ rating }
            genre={ genre }
            onClick={ this.onClick }
            handleChange={ this.handleChange }
          />
        </div>
      </div>
    );
  }
}

export default App;
