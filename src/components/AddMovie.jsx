// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="search" className="col-12">
          Título
          <input
            className="form-control"
            type="text"
            placeholder="Insira um título"
            data-testid="title-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
