import React from 'react';

class InputText extends React.Component {

  render() {
    return <>
    <label htmlFor="inputText" data-testid="text-input-label">
      Inclui o texto:
      <input 
        type="text" 
        id="inputText"
        value="searchText" 
        onChange={onSearchTextChange}
        data-testid="text-input"
      />
    </label>
    </>
  }
}

export default InputText;