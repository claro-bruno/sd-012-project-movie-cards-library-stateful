import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action'
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    console.log(target.value);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie value={ this.state } handleChange={ this.handleChange } />
      </div>
    );
  }
}

export default App;
