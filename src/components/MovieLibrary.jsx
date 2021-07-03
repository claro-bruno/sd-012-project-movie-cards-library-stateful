// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      movies,
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm = () => {
    const { movies } = this.props;
    this.setState({
      movies,
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.submitForm } />
      </div>
    );
  }
}

export default MovieLibrary;
