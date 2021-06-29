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

  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.state;
    const { getInput, makeInput, makeTextarea } = this;
    const formItems = [
      ['title', 'title', 'Título', 'text', title, getInput, makeInput],
      ['subtitle', 'subtitle', 'Subtítulo', 'text', subtitle, getInput, makeInput],
      ['image', 'imagePath', 'Imagem', 'text', imagePath, getInput, makeInput],
      ['storyline', 'storyline', 'Sinopse', 'text', storyline, getInput, makeTextarea],
      ['rating', 'rating', 'Avaliação', 'number', rating, getInput, makeInput],
    ];
    return (
      <form data-testid="add-movie-form" action="">
        {formItems.map((item) => item[item.length - 1](item))}
      </form>
    );
  }
}

export default AddMovie;
