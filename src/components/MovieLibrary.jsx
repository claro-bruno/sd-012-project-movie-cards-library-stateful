import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';


class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

 

  render() {
    return (
    <div>
      <SearchBar />
      <AddMovie />
    </div>
    );
  }
}

export default MovieLibrary;
