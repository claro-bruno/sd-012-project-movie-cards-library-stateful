import React from 'react';

class Titulo extends React.Component {
  render() {
    return (
      <label data-testid="title-input-label" htmlFor="search" className="col-12">
        Título
        <input
          className="form-control"
          type="text"
          placeholder="Insira um título"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

export default Titulo;
