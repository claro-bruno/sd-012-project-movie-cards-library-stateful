import React from 'react';

export default class SearchBarInput extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { searchText, onSearchTextChange, } = this.props;
    return (      
      <label
        htmlFor="text-input"
        data-testid="text-input-label"
      >
        Inclui o texto
        <input
          onChange={ onSearchTextChange }
          type="text"
          data-testid="text-input"
          value={ searchText }
          id="texto"
          name="texto"
        />
      </label>
    );
  }
}
