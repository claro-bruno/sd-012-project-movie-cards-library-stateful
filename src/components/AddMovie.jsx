import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormButton from './FormButton';

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
    // https://medium.com/@justintulk/best-practices-for-resetting-an-es6-react-components-state-81c0c86df98d
    this.initialState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  onSubmit(newMovie) {
    const { onClick } = this.props;
    onClick(newMovie);
    this.setState(this.initialState);
  }

  // https://stackoverflow.com/questions/47468361/get-variable-name-into-string-in-javascript/47468674
  varToString(varObj) {
    return Object.keys(varObj)[0];
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const optionsArray = ['action', 'comedy', 'thriller'];
    const inputsArray = [
      { title }, { subtitle }, { imagePath }, { storyline }, { rating },
    ];
    return (
      <form data-testid="add-movie-form">
        { inputsArray.map((input) => {
          const type = (this.varToString(input) === 'rating') ? 'number' : 'text';
          return (
            <FormInput
              key={ this.varToString(input) }
              type={ type }
              value={ input[this.varToString(input)] }
              onChange={ this.handleChange }
              name={ this.varToString(input) }
            />
          );
        }) }
        <FormSelect
          options={ optionsArray }
          value={ genre }
          onChange={ this.handleChange }
          name="genre"
        />
        <FormButton
          onClick={ () => this.onSubmit(this.state) }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}.isRequired;

export default AddMovie;
