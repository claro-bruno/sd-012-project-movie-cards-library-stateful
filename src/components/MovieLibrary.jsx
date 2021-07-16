import React from 'react';
import SearchBar from './SearchBar'

class MovieLibrary extends React.Component{
    render(){
        return(
        <SearchBar caneca='agua' OnSearchTextChange />
        )
    }
}

export default MovieLibrary;
