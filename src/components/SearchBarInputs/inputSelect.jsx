import React from 'react';

class InputSelect extends React.Component {

  render() {
    return <>
    <label htmlFor="inputSelect" data-testid="text-input-label">
      Filtrar por gênero
      <select 
      data-testid="select-input-label"
      value="selectedGenre"
      onChange={onSelectGenreChange}
      >

      </select>
    </label>
    </>
  }
}

export default InputSelect;