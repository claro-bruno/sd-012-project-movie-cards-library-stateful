import React from 'react';

class InputSelect extends React.Component {

  render() {
    const {selectValue, onChangeSelect} = this.props
    return (
    <label htmlFor="inputSelect" 
    data-testid="select-input-label">
      Filtrar por gênero
      <select 
      data-testid="select-input"
      value={selectValue}
      onChange={onChangeSelect}
      >
        <option value=""
        data-testid="select-option">All</option>
        <option value="action"
        data-testid="select-option" >Action</option>
        <option value="comedy"
        data-testid="select-option">Comedy</option>
        <option value="thriller"
        data-testid="select-input">Thriller</option>
      </select>
    </label>
    )}
}

export default InputSelect;