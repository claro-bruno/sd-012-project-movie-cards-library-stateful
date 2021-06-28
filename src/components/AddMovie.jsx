// implement AddMovie component here
import React, { Component } from 'react';
import TextInput from './TextInput';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name } = e.target;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TextInput
          id="title"
          label="Título"
          name="title"
          value={title}
          handleChange={this.handleChange}
        />
        <TextInput
          id="subtitle"
          label="Subtítulo"
          name="subtitle"
          value={subtitle}
          handleChange={this.handleChange}
        />
        <TextInput
          id="image"
          label="Imagem"
          name="imagePath"
          value={imagePath}
          handleChange={this.handleChange}
        />
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            type="text"
            data-testid="storyline-input"
            name="storyline"
            value={storyline}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            name="rating"
            value={rating}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={genre}
            onChange={this.handleChange}
          >
            <option data-testid="genre-option" value="action" selected>
              Ação
            </option>
            <option data-testid="genre-option" value="comedy">
              Comédia
            </option>
            <option data-testid="genre-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
