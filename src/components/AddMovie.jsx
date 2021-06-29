import React, { Component } from 'react';
import Input from './addmovie-components/Input';
import inputsProps from './addmovie-components/inputsProps';
import Select from './Select';
import optionsProps from './addmovie-components/optionsProps';

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
        <Select
          labelText="Gênero"
          dataTestIdLabel="genre-input-label"
          name="genre"
          id="genre-input"
          dataTestIdInput="genre-input"
          value={ genre }
          handleChange={ this.handleChange }
          options={ optionsProps }
        />
      </form>
    );
  }
}

export default AddMovie;
