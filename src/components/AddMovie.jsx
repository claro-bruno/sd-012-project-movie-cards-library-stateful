import React from 'react';
import InputsLabelsMovie from './InputsLabelsMovie';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handlerChange = this.handlerChange.bind(this);

  }

  handlerChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.state({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.state;
      return (
      <form data-testid="add-movie-form">
        <InputsLabelsMovie state={ this.state } valuesChange={ this.handlerChange }/>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select data-testid="genre-input" onChange={ this.handlerChange }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" type="submit" onClick={ onClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
