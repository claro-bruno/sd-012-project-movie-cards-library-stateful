import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormInput from './FormInput';
import FormSelect from './FormSelect';

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
    this.onClickr = this.onClickr.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  onClickr() {
    const { onClick } = this.props;
    onClick();
    this.setState(this.initialState);
  }

  // eslint-disable-next-line max-lines-per-function
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
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.onClickr }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}.isRequired;

export default AddMovie;
