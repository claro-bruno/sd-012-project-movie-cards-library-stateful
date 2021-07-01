import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import inputs from '../inputs';
import Select from './Select';

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
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputs({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(onClick) {
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
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
          <Select onChange={ this.handleInputs } genreState={ genre } />
          <button
            data-testid="send-button"
            type="button"
            onClick={ this.handleClick(onClick) }
          >
            Adicionar filme
          </button>
        </fieldset>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
