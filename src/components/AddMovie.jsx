import React, { Component } from 'react';
import Input from './addmovie-components/Input';
import inputsProps from './addmovie-components/inputs-props';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  render() {
    const {
      storyline,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        { inputsProps.map((input) => {
          const { state } = this;
          return (
            <Input
              key={ input.name }
              labelText={ input.labelText }
              dataTestIdLabel={ input.dataTestIdLabel }
              type={ input.type }
              name={ input.name }
              id={ input.id }
              dataTestIdInput={ input.dataTestIdInput }
              value={ state[input.name] }
              handleChange={ this.handleChange }
            />);
        })}
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="storyline-input"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre-input"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
