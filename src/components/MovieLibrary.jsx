import React from 'react';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    return (
      <h1>{ this.state }</h1>
    );
  }
}

export default MovieLibrary;
