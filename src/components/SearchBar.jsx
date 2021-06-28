import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e) {
    this.props.parentThis.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    const parentThis = this.props.parentThis;
    return (
      <div>
        <form >
          <input onChange={this.inputHandler} type="text" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
