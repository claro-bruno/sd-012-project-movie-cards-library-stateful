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

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
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
