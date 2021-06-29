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

  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.state;
    const { getInput, makeInput } = this;
    const formItems = [
      ['title', 'title', 'Título', 'text', title, getInput],
      ['subtitle', 'subtitle', 'Subtítulo', 'text', subtitle, getInput],
      ['image', 'imagePath', 'Imagem', 'text', imagePath, getInput],
    ];
    return (
      <form data-testid="add-movie-form" action="">
        {formItems.map((item) => makeInput(item))}
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea cols="30"
            rows="10"
            id="storyline"
            type="text"
            value={ storyline }
            onChange={ getInput }
            data-testid="storyline-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
