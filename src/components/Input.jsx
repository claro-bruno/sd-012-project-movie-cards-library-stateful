import React from 'react';

class Input extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <fieldset>
          <label data-testid="text-input-label">
          Inclui o texto:
          <input type="text" value={ searchText } onChange={ onSearchTextChange } />
          </label>
      </fieldset>
    );
  }
}

export default Input;
