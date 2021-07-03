import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    return (
      <form data-testid="add-movie-form" action="">
        subtítulo
        <input
          type="text"
        />
        título
        <input type="text" />
        caminho da imagem
        <label htmlFor="s">
          <textarea data-testid="storyline-input" name="ss" id="s" cols="10" rows="10" />
        </label>
        <input type="text" />
        avaliação
        <input type="number" />
        gênero
        <input type="text" />

      </form>
    );
  }
}
export default AddMovie;
