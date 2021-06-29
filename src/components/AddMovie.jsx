import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieForm1 from './AddMovieForm1';
import AddMovieForm2 from './AddMovieForm2';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  onClickButton(e) {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <h2>Adicionar novo Filme</h2>
        <AddMovieForm1 state={ this.state } handleChange={ this.handleChange } />
        <AddMovieForm2
          state={ this.state }
          handleChange={ this.handleChange }
          onClickButton={ this.onClickButton }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
