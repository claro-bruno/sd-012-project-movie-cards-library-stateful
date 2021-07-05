import React from 'react';

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
    this.handleChange = this.handleChange.bind(this);
    this.genericInput = this.genericInput.bind(this);
    this.selectInput = this.selectInput.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  selectInput(value) {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre"
          value={ value }
          data-testid="genre-input"
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>

      </label>
    );
  }

  genericInput(id, type, inputLabel, value) {
    const dataTestId = id.split(/(?=[A-Z])/)[0]; // split camel case
    return (
      <label htmlFor={ id } data-testid={ `${dataTestId}-input-label` }>
        { inputLabel }
        { type === 'textarea' ? <textarea
          name={ id }
          id={ id }
          data-testid={ `${dataTestId}-input` }
          value={ value }
          onChange={ this.handleChange }
        /> : <input
          type={ type }
          name={ id }
          id={ id }
          data-testid={ `${dataTestId}-input` }
          value={ value }
          onChange={ this.handleChange }
        />}
      </label>

    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <span>AddMovie Component</span>
        <form data-testid="add-movie-form">
          { this.genericInput('title', 'text', 'Título', title)}
          { this.genericInput('subtitle', 'text', 'Subtítulo', subtitle)}
          { this.genericInput('imagePath', 'text', 'Imagem', imagePath)}
          { this.genericInput('storyline', 'textarea', 'Sinopse', storyline)}
          { this.genericInput('rating', 'number', 'Avaliação', rating)}
          { this.selectInput(genre)}
        </form>
      </div>
    );
  }
}

export default AddMovie;
