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
    this.clearValues = this.clearValues.bind(this);
  }

  handlerChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

   clearValues(onClick) {
    onClick({...this.state})
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    })
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <InputsLabelsMovie state={ this.state } handlerChange={ this.handlerChange } />
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            type="text"
            value={ this.state.storyline }
            onChange={ this.handlerChange }
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select name="genre" data-testid="genre-input" value={ this.state.genre } onChange={ this.handlerChange }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" type="button" onClick={ () =>  this.clearValues(onClick) } >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
