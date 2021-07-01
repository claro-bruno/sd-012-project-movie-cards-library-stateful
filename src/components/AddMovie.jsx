import React, { Component } from 'react';

import Input from './Input';
import inputs from '../inputs';
import Option from './Option';
import genreOptions from '../genreOptions';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { storyline, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <fieldset>
          { inputs.map(({ dataTestidLabel, textLabel, dataTestid, type, keyState }) => (
            <Input
              dataTestidLabel={ dataTestidLabel }
              textLabel={ textLabel }
              dataTestid={ dataTestid }
              type={ type }
              name={ keyState }
              value={ this.state[keyState] }
              onChange={ this.handleInputs }
              key={ keyState }
            />
          ))}
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <textarea
              data-testid="storyline-input"
              id="storyline-input"
              name="storyline"
              value={ storyline }
              onChange={ this.handleInputs }
            />
          </label>
          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
            <select
              data-testid="genre-input"
              id="genre-input"
              name="genre"
              value={ genre }
              onChange={ this.handleInputs }
            >
              { genreOptions.map(({ value, text }) => (
                <Option value={ value } text={ text } key={ value } />
              )) }
            </select>
          </label>
        </fieldset>
      </form>
    );
  }
}

export default AddMovie;
