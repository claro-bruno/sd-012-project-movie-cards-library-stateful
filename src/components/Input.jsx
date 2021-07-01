import React from 'react';

class Input extends React.Component {
  render() {
    return(
      <label data-testid="text-input-label">
        Inclui o texto:
        <input type="text" onChange={ onSearchTextChange }></input>
      </label>
    );
  }
}

export default Input;