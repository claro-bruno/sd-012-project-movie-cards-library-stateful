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

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const optionsArray = ['action', 'comedy', 'thriller'];
    // const inputsArray = [title, subtitle, imagePath, storyline, rating];
    // console.log(inputsArray[0]);
    return (
      <form data-testid="add-movie-form">
        {/* { inputsArray.map((input) => {
          console.log(input);
          console.log(this.varToString(input));
          const type = (input === rating) ? 'number' : 'text';
          return (
            <FormInput
              key={ this.varToString(input) }
              type={ type }
              value={ input }
              onChange={ this.handleChange }
              name={ this.varToString(input) }
            />
          );
        }) } */}
        <FormInput
          type="text"
          value={ title }
          onChange={ this.handleChange }
          name="title"
        />
        <FormInput
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
          name="subtitle"
        />
        <FormInput
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
          name="imagePath"
        />
        <FormInput
          type="text"
          value={ storyline }
          onChange={ this.handleChange }
          name="storyline"
        />
        <FormInput
          type="number"
          value={ rating }
          onChange={ this.handleChange }
          name="rating"
        />
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
