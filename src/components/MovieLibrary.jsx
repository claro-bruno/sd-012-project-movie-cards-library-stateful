import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from  './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Minha incrível Movie Library</h2>
                <SearchBar />
                <MovieList movies={this.props.movies} />
                <AddMovie />
            </div>
        );
    }
}

export default MovieLibrary;
