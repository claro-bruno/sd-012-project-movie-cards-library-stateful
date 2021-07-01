import React from 'react';
// import Input from './Input';
// import Checkbox from './Checkbox';
// import Select from './Select';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      // selectedGenre: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  onSearchTextChange(e) {
    this.setState({
      searchText: e.target.value,
    })
  }

  render() {
    const { searchText } = this.state;

    return (
      <form onSubmit={ this.handleSubmit } data-testid="search-bar-form">
        <fieldset>
          <label data-testid="text-input-label">
          Inclui o texto:
          <input type="text" value={ searchText } onChange={ this.onSearchTextChange }></input>
          </label>
          {/* <Input onChange={ this.onSearchTextChange }/> */}
          {/* <Checkbox />
          <Select /> */}
        </fieldset>
      </form>
    );
  }
}

export default SearchBar;
