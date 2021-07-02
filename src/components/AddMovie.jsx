import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputStoryline from './InputStoryline';
import InputRating from './InputRating';
import InputGenre from './InputGenre';

const stateInitial = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = stateInitial;
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(stateInitial);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ this.handleChange } />
        <InputSubtitle value={ subtitle } onChange={ this.handleChange } />
        <InputImage value={ imagePath } onChange={ this.handleChange } />
        <InputStoryline value={ storyline } onChange={ this.handleChange } />
        <InputRating value={ rating } onChange={ this.handleChange } />
        <InputGenre value={ genre } onChange={ this.handleChange } />
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
