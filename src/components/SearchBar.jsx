import React from 'react';

class SearchBar extends React.Component{
    render() {
        return(
            <label>Inclui o texto:
                <input type='text' data-testid="search-bar-form" />
            </label>
        )
    }
}

export default SearchBar;