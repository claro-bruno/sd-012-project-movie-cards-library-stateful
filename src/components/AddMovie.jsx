// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
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
  }

  getInput = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  clearStates = () => {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  addMovieClick = () => {
    const { onClick } = this.props;
    onClick();
    this.clearStates();
  }

  makeInput = (formItemInfo) => {
    const [name, varName, written, type, variable, callback] = formItemInfo;
    return (
      <div key={ varName }>
        <label htmlFor={ varName } data-testid={ `${name}-input-label` }>
          { written }
          <input
            id={ varName }
            type={ type }
            value={ variable }
            onChange={ callback }
            data-testid={ `${name}-input` }
          />
        </label>
        <br />
      </div>
    );
  }

  makeTextarea = (formItemInfo) => {
    const [name, varName, written, type, variable, callback] = formItemInfo;
    return (
      <div key={ varName }>
        <label htmlFor={ varName } data-testid={ `${name}-input-label` }>
          { written }
          <textarea
            cols="30"
            rows="5"
            id={ varName }
            type={ type }
            value={ variable }
            onChange={ callback }
            data-testid={ `${name}-input` }
          />
        </label>
        <br />
      </div>
    );
  }

  makeSelect = (formItemInfo) => {
    const [name, varName, written, type, variable, callback] = formItemInfo;
    return (
      <div key={ varName }>
        <label htmlFor={ varName } data-testid={ `${name}-input-label` }>
          { written }
          <select
            id={ varName }
            value={ variable }
            onChange={ callback }
            data-testid={ `${name}-input` }
          >
            <option value="action" data-testid={ type }>Ação</option>
            <option value="comedy" data-testid={ type }>Comédia</option>
            <option value="thriller" data-testid={ type }>Suspense</option>
          </select>
        </label>
        <br />
      </div>
    );
  }

  makeButton = (formItemInfo) => {
    const [name, , written, , , callback] = formItemInfo;
    return (
      <div key={ `${name}-button` }>
        <button
          type="button"
          onClick={ callback }
          data-testid={ `${name}-button` }
        >
          { written }
        </button>
      </div>
    );
  }

  render() {
    const { title, subtitle, storyline, imagePath, rating, genre } = this.state;
    const { getInput, addMovieClick, makeInput, makeTextarea, makeSelect, makeButton } = this;
    const formItems = [
      ['title', 'title', 'Título', 'text', title, getInput, makeInput],
      ['subtitle', 'subtitle', 'Subtítulo', 'text', subtitle, getInput, makeInput],
      ['image', 'imagePath', 'Imagem', 'text', imagePath, getInput, makeInput],
      ['storyline', 'storyline', 'Sinopse', 'text', storyline, getInput, makeTextarea],
      ['rating', 'rating', 'Avaliação', 'number', rating, getInput, makeInput],
      ['genre', 'genre', 'Gênero', 'genre-option', genre, getInput, makeSelect],
      ['send', '', 'Adicionar filme', '', '', addMovieClick, makeButton],
    ];
    return (
      <form data-testid="add-movie-form" action="">
        {formItems.map((item) => item[item.length - 1](item))}
      </form>
    );
  }
}

export default AddMovie;
