import React from 'react';

class SearchText extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="seatchText" data-testid="text-input-label" className="label">
        Inclui o texto:
        <input
          type="text"
          data-testid="text-input"
          className="input"
          value={ searchText }
          name="searchText"
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

export default SearchText;
